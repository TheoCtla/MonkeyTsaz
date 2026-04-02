import { useEffect, useRef } from 'react';
import type { WordEntry } from '../types';

interface WordHistoryProps {
  words: WordEntry[];
}

export function WordHistory({ words }: WordHistoryProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [words.length]);

  if (words.length === 0) return null;

  return (
    <div className="word-history">
      <div className="word-history-header">historique</div>
      <div className="word-history-list">
        {words.map((entry, i) => (
          <span key={i} className={`word-entry ${entry.correct ? 'correct' : 'wrong'}`}>
            {entry.word}
          </span>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
