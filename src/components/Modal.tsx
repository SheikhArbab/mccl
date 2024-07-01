
import { useState } from 'react'
import { Info } from 'phosphor-react'
import { Button, Checkbox, Label, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from 'keep-react'
import { MdDelete } from 'react-icons/md'



const ModalC = ({ deleteFnc }: { deleteFnc: Function }) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={openModal} className='text-black dark:text-white'>
                <MdDelete />
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalBody className="space-y-3">
                    <ModalIcon>
                        <Info size={28} weight="fill" />
                    </ModalIcon>
                    <ModalContent>
                        <div className="!mb-6">
                            <h3 className="mb-2 text-body-1 font-medium text-metal-900 dark:text-metal-300">
                                Are you absolutely sure?</h3>
                            <p className="text-body-4 font-normal text-metal-600">
                                This action cannot be undone. This will permanently delete and remove your data from our servers.
                            </p>
                        </div>
                        <fieldset className="mb-3 flex items-center gap-2">
                            <Checkbox id="checkbox" />
                            <Label htmlFor="checkbox" className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                                I understand, no need to repeat
                            </Label>
                        </fieldset>
                    </ModalContent>
                    <ModalFooter>
                        <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={() => { deleteFnc(); closeModal() }} size="sm" color="primary">
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalC