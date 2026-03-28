import React from 'react';

interface ChapterMarkerProps {
    chapter: string;
    title: string;
}

const ChapterMarker: React.FC<ChapterMarkerProps> = ({ chapter, title }) => {
    return (
        <div className="chapter-marker">
            <span className="chapter-marker-text">{chapter}</span>
            <span className="chapter-marker-text text-right">{title}</span>
        </div>
    );
};

export default ChapterMarker;
