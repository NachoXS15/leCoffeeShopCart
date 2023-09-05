import React from "react";
import { Offcanvas } from "react-bootstrap";
import useHistoryContext from "../context/HistoryContext";

type HistoryProps = {
    isOpen: boolean;
};

export default function History({ isOpen }: HistoryProps) {
    const { historyOpen, historyClose } = useHistoryContext();
    return (
      <>
        <Offcanvas show={isOpen} onHide={historyClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Historial</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h5 style={{ textAlign: "center" }}>
                    Acá iran los elementos guardados
                </h5>
            </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
