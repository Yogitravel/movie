import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import YouTube from '@u-wave/react-youtube';



export default function Trailer(props) {

    return (
        <div>

            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.Youtubeid.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <YouTube
                        video={props.Youtubeid.key}
                        height="500"
                        width="100%"

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
