import { Info } from 'lucide-react';

export default function Toast({ toast }) {
  return (
    <div className="toast-region" aria-live="polite">
      {toast && (
        <div key={toast.id} className="toast">
          <Info size={16} aria-hidden="true" />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
