import React from 'react'
import { Panel, PanelGroup } from 'rsuite';

const Card = (Props) => {
    return (
        <React.Fragment>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                <img src="https://via.placeholder.com/240x240" height="240" />
                <Panel header="RSUITE">
                    <p>
                        <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                    </p>
                </Panel>
            </Panel>

        </React.Fragment>
    )
}

export default Card;