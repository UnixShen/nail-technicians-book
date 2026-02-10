"use client"

import { Modal } from "antd-mobile";

import { ModalItemProps } from "../types";
import { ModalContent } from "./content";

export const ModalItem: React.FC<ModalItemProps> = ({
    showModal,
    setShowModal,
    title,
    addType,
}) => {
    return (
        <Modal
            visible={showModal}
            onClose={() => setShowModal(false)}
            closeOnMaskClick
            title={<div className="text-sm font-semibold">{title}</div>}
            content={<ModalContent showModal={showModal} setShowModal={setShowModal} addType={addType} />}
        />
    )
}