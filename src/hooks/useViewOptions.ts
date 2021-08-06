import { useState } from 'react';

export default function useViewOptions() {
  const [view, setView] = useState<'table' | 'form'>('table');

  const showTable = () => setView('table');
  const showForm = () => setView('form');
  return {
    formView: view === 'form',
    tableView: view === 'table',
    showForm,
    showTable,
  };
}
