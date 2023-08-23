import { useState } from 'react';
import styles from './ProjectRow.module.css';

export default function ProjectRow({ apiData }) {
    const [scaleFactor, setScaleFactor] = useState(0);

    const handleSetScaleFactor = () => {
        setScaleFactor((current) => {
            if (current === 2) return 0;
            return current + 1;
        });
    };

    if ( apiData.group.length === 0) {
        return (
            <h1>{apiData.title}</h1>
        );
    }

    return (
        <div
            style={{
                marginBottom: '2rem',
                display: 'flex',
            }}
        >
            <div
                style={{
                    width: '360px',
                    minWidth: '360px',
                    padding: '1rem 2rem',
                }}

            >
                <h2>{apiData.title}</h2>

                <p
                    style={{
                        display: scaleFactor > 0 ? 'block' : 'none',
                        textAlign: 'right',
                    }}
                >
                    {apiData.group[0]?.description}
                </p>

                <button onClick={() => console.log('row data: ', apiData)}>Projects Object</button>
            </div>

            <div
                style={{
                    marginRight: 'auto',
                    display: 'flex',
                    gap: '1rem',
                    overflowX: 'scroll',
                }}
            >
                {
                    apiData.group[0]?.pictures.map((picture) => (
                        <div
                            key={picture.url}
                            onClick={handleSetScaleFactor}
                            style={{
                                width: scaleFactor === 1 ? '1000px' : '200px',
                                height: scaleFactor === 1 ? '500px' : '100px',
                                backgroundColor: '#000000',
                                // flexBasis: '200px',
                                flexGrow: 0,
                                flexShrink: 0,
                            }}
                        >
                            <img
                                src={picture.url}
                                alt="project picture"
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
