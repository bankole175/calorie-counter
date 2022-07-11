import {useState} from "react";
import {Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";

type Inputs = {
    name: string,
    calorie: number,
    price: number,
}

export function AddFood() {
    const [modalShow, setModalShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        alert(JSON.stringify(data));
    };

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <div className="d-flex justify-content-between mt-5 mb-5">
                <div></div>
                <button onClick={() => setModalShow(true)} className="add-btn">+ ADD FOOD</button>
            </div>

            <Modal
                onHide={() => setModalShow(false)}
                show={modalShow}
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Food
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="name">Food</label>
                            <input
                                className="form-control"
                                placeholder="Pizza"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            {errors.name && <p className={'form-error'}>Food is required</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="calorie">Calorie</label>
                            <input
                                className="form-control"
                                placeholder="0"
                                type="number"
                                step="any"
                                {...register("calorie", {
                                    required: true,
                                    validate: {
                                        positiveNumber: (value) => value > 0,
                                    }
                                })}
                            />
                            {errors.calorie && (
                                <p className={'form-error'}>Calorie is invalid</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                className="form-control"
                                placeholder="0"
                                type="number"
                                step="any"
                                {...register("price", {
                                    validate: {
                                        positiveNumber: (value) => value == 0 || value > 0
                                    }
                                })}
                            />
                            {errors.price && errors.price.type === "positiveNumber" && (
                                <p className={'form-error'}>Price is invalid</p>
                            )}
                        </div>

                        <div className="float-end my-2">
                            <div className="d-flex align-items-baseline">
                                <p className="me-3 cursor" onClick={() => setModalShow(false)}>Close</p>
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
