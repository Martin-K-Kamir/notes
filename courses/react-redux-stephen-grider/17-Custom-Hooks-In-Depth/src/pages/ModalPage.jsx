import Modal from "../components/Modal.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    function handleOpenModal() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium delectus dolore doloribus eligendi error impedit
                incidunt iusto labore minima neque, nesciunt nostrum
                perspiciatis quae quibusdam quos reiciendis sequi similique sit
                tempora ullam vero voluptate voluptatum. Ad animi aperiam aut
                autem debitis dolorem dolores eaque eligendi, et facilis fugiat
                illum ipsa ipsam iure libero maxime minima modi natus nemo
                officia officiis optio perspiciatis ratione sequi soluta tempore
                vero voluptatibus. Accusamus aspernatur at commodi doloribus ex
                iure maiores, quas ratione suscipit totam. Adipisci architecto
                culpa distinctio eaque eligendi facilis id iusto maxime officia
                optio porro, provident quas, quasi quos rerum sint soluta
                tempora? Ad architecto autem, beatae, doloribus ea eius error
                expedita itaque magnam maxime modi porro possimus quidem ratione
                temporibus, veniam voluptatem! Ad alias consequatur, dolore ex
                excepturi fugiat ipsam laborum maiores, molestias numquam qui
                tempora, totam velit. Ad architecto autem blanditiis commodi
                debitis deserunt dolore earum explicabo hic laboriosam laborum
                maiores neque nostrum odio odit optio porro possimus quaerat
                repudiandae sapiente, tempora vero voluptas. Accusamus
                aspernatur consequuntur doloribus facere fugit iusto modi, nobis
                omnis pariatur repudiandae! Accusamus enim eos esse et impedit
                nulla possimus qui repellendus sit tempora! Accusamus ad alias
                at consectetur corporis dignissimos distinctio dolorem dolorum
                eligendi eum exercitationem expedita illo, incidunt laborum
                laudantium maiores mollitia nesciunt nostrum, omnis quaerat quam
                reiciendis temporibus! Blanditiis, eligendi vel! Asperiores
                assumenda consectetur, dignissimos earum eveniet id incidunt
                inventore ipsa iste nulla pariatur quod saepe temporibus velit
                voluptate. Doloremque expedita fuga modi, nam optio quam
                reiciendis. Alias aliquid animi asperiores consectetur corporis
                cumque exercitationem, hic in ipsum labore nam non obcaecati
                maiores neque nostrum odio odit optio porro possimus quaerat
                repudiandae sapiente, tempora vero voluptas. Accusamus
                aspernatur consequuntur doloribus facere fugit iusto modi, nobis
                omnis pariatur repudiandae! Accusamus enim eos esse et impedit
                nulla possimus qui repellendus sit tempora! Accusamus ad alias
                at consectetur corporis dignissimos distinctio dolorem dolorum
                eligendi eum exercitationem expedita illo, incidunt laborum
                laudantium maiores mollitia nesciunt nostrum, omnis quaerat quam
                reiciendis temporibus! Blanditiis, eligendi vel! Asperiores
                assumenda consectetur, dignissimos earum eveniet id incidunt
                inventore ipsa iste nulla pariatur quod saepe temporibus velit
                voluptate. Doloremque expedita fuga modi, nam optio quam
                reiciendis. Alias aliquid animi asperiores consectetur corporis
                cumque exercitationem, hic in ipsum labore nam non obcaecati
                maiores neque nostrum odio odit optio porro possimus quaerat
                repudiandae sapiente, tempora vero voluptas. Accusamus
                aspernatur consequuntur doloribus facere fugit iusto modi, nobis
                omnis pariatur repudiandae! Accusamus enim eos esse et impedit
                nulla possimus qui repellendus sit tempora! Accusamus ad alias
                at consectetur corporis dignissimos distinctio dolorem dolorum
                eligendi eum exercitationem expedita illo, incidunt laborum
                laudantium maiores mollitia nesciunt nostrum, omnis quaerat quam
                reiciendis temporibus! Blanditiis, eligendi vel! Asperiores
                assumenda consectetur, dignissimos earum eveniet id incidunt
                inventore ipsa iste nulla pariatur quod saepe temporibus velit
                voluptate. Doloremque expedita fuga modi, nam optio quam
                reiciendis. Alias aliquid animi asperiores consectetur corporis
                cumque exercitationem, hic in ipsum labore nam non obcaecati
            </p>

            <Button className="my-5" primary onClick={handleOpenModal}>
                Open modal
            </Button>

            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <div className="flex flex-col justify-between h-full">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </p>
                        <div className="flex justify-end">
                            <Button primary onClick={handleCloseModal}>
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
