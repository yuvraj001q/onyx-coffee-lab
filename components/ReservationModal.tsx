'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLocation?: string;
}

const TIME_SLOTS = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
];

export default function ReservationModal({ isOpen, onClose, initialLocation }: ReservationModalProps) {
  const { user } = useAuth();
  const [location, setLocation] = useState(initialLocation || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [reservationNumber, setReservationNumber] = useState('');

  const reset = () => {
    setLocation(initialLocation || '');
    setDate('');
    setTime('');
    setPartySize(2);
    setNotes('');
    setLoading(false);
    setConfirmed(false);
    setReservationNumber('');
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const generateId = () => {
    const num = Math.floor(10000 + Math.random() * 90000);
    return `ONYX-${num}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !date || !time) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setReservationNumber(generateId());
    setConfirmed(true);
    setLoading(false);
  };

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div className={`modal modal--wide`} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose} aria-label="Close">
          &times;
        </button>

        {!confirmed ? (
          <>
            <div className="modal__header">
              <h2 className="modal__title">Reserve a Table</h2>
              <p className="modal__subtitle">
                {user?.name ? `Booking as ${user.name}` : 'Select your preferences below'}
              </p>
            </div>
            <div className="modal__body">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="res-location">Location</label>
                  <select
                    id="res-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a location</option>
                    <option value="Rogers HQ">Rogers HQ</option>
                    <option value="The Momentary">The Momentary</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="field">
                    <label htmlFor="res-date">Date</label>
                    <input
                      id="res-date"
                      type="date"
                      value={date}
                      min={getTomorrowDate()}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="res-party">Party Size</label>
                    <select
                      id="res-party"
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Available Times</label>
                  <div className="time-slots">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`time-slot ${time === slot ? 'selected' : ''}`}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="res-notes">Special Notes (optional)</label>
                  <textarea
                    id="res-notes"
                    placeholder="Dietary requirements, celebrations, seating preference..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--full btn--lg"
                  disabled={loading || !location || !date || !time}
                  style={{ marginTop: 8 }}
                >
                  {loading ? <span className="spinner" /> : 'Confirm Reservation'}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="confirmation">
            <div className="success-check">
              <svg className="success-check__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="modal__title">Reservation Confirmed</h2>
            <p className="modal__subtitle" style={{ marginBottom: 8 }}>
              Thank you, {user?.name || 'Guest'}
            </p>
            <div className="confirmation__number">{reservationNumber}</div>

            <div className="confirmation__details">
              <div className="confirmation__detail">
                <span className="confirmation__detail-label">Location</span>
                <span className="confirmation__detail-value">{location}</span>
              </div>
              <div className="confirmation__detail">
                <span className="confirmation__detail-label">Date</span>
                <span className="confirmation__detail-value">
                  {new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
                    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
                  })}
                </span>
              </div>
              <div className="confirmation__detail">
                <span className="confirmation__detail-label">Time</span>
                <span className="confirmation__detail-value">{time}</span>
              </div>
              <div className="confirmation__detail">
                <span className="confirmation__detail-label">Party Size</span>
                <span className="confirmation__detail-value">{partySize} {partySize === 1 ? 'guest' : 'guests'}</span>
              </div>
              {notes && (
                <div className="confirmation__detail">
                  <span className="confirmation__detail-label">Notes</span>
                  <span className="confirmation__detail-value">{notes}</span>
                </div>
              )}
            </div>

            <div className="confirmation__actions">
              <button className="btn btn--primary btn--full" disabled>
                Add To Calendar
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: 4 }}>
                Email confirmation sent to {user?.email}
              </p>
              <button className="btn btn--ghost btn--full" onClick={handleClose}>
                Return Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
