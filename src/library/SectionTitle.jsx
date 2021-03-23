import React from 'react'
import SectionTitleStyles from '../css/SectionTitleStyles.module.css';

function SectionTitle ( { title } ) {
    return (
        <>
            <div className={SectionTitleStyles.title}>
                <span className={SectionTitleStyles.titleCaption}>{title}</span>

            </div>
            <div className={SectionTitleStyles.titleMarkerContainer}>
                <hr className={SectionTitleStyles.titleMarker} />
            </div>
        </>
    )
}

export default SectionTitle
