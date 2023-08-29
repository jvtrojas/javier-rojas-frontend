import { useState, useMemo } from 'react';
import styles from './ProjectRow.module.css';

export default function ProjectRow({ apiData }) {
    const splitContent = useMemo(() => {
        const splitHeader = apiData.content.split('</h2>');
        splitHeader[0] = splitHeader[0].replace('<h2>', '');
        return splitHeader;
    }, []);


    const [scaleFactor, setScaleFactor] = useState(0);

    const handleSetScaleFactor = () => {
        setScaleFactor((current) => {
            // if (current === 2) return 0;
            if (current === 1) return 0;
            return current + 1;
        });
    };

    /* --- */

    if ( apiData.group.length === 0) {
        return (
            <h2
                style={{
                    // width: '28rem',
                    // padding: '0 0 0 360px',
                    padding: '0 0 0 280px',
                    margin: '0 0 2rem 0',
                    display: 'block',
                    textTransform: 'uppercase',
                    // textAlign: 'right',
                    fontWeight: '200',
                }}
            >
                {apiData.title}
            </h2>
        );
    }

    return (
        <>
            <div
                style={{
                    marginBottom: '2rem',
                    display: 'flex',
                    // border: 'solid 5px red',
                }}
            >
                {/* - TITLE & DESCRIPTION - */}
                <div
                    style={{
                        width: '360px',
                        minWidth: '360px',
                        padding: '1rem 2rem',
                        // border: 'solid 5px yellow',
                    }}

                >
                    <div
                        dangerouslySetInnerHTML={{ __html: splitContent[0] }}
                        style={{
                            margin: '0 0 2rem 0',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            textAlign: 'right',
                        }}
                    />

                    <div
                        dangerouslySetInnerHTML={{ __html: splitContent[1] }}
                        style={{
                            display: scaleFactor > 0 ? 'block' : 'none',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                        }}
                    />
                </div>

                <div>
                    {/* - PICTURES - */}
                    <div
                        style={{
                            maxWidth: 'calc(100vw - 360px)',
                            display: 'flex',
                            gap: '1rem',
                            overflowX: 'scroll',
                            // border: 'solid 5px blue',
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

                    {/* - EPILOGUE - */}
                    <div
                        style={{
                            display: scaleFactor > 0 ? 'block' : 'none',
                            width: '50ch',
                            padding: '1rem',
                            fontSize: '10px',
                        }}
                        dangerouslySetInnerHTML={{ __html: apiData.group[0].description }}
                    />
                </div>
            </div>
        </>
    );
}
