import styled from "styled-components";
import Form from "../features/form/Form";
import FormRow from "../features/form/FormRow";
import Input from "../features/form/Input";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCheckout } from "../context/CheckoutContext";
import { useNavigate } from "react-router-dom";
import { device } from "../utils/sizes";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100rem;

  background-color: var(--color-white);
  box-shadow: var(--box-shadow-dark);
  border-radius: 5rem;
  padding: 4rem;
  z-index: 1500;

  @media ${device.tabletL} {
    width: 90%;
    height: 70vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 10px;
    }
  }

  & svg {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;

const ModalGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.tabletL} {
    display: block;
  }
`;

function Modal({ handleModal, name, country, type, tour }) {
  const { checkoutDestinations, checkoutTours } = useCheckout();
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const id = Math.floor(Math.random() * 10000 + 1);
  const navigate = useNavigate();

  function onSubmit() {
    toast.success("The form successfully submitted");
    const values = getValues();
    if (type === "destinations")
      checkoutDestinations.push({
        ...values,
        to: name,
        country: country,
        id: id,
        type: type,
      });
    if (type === "tours")
      checkoutTours.push({
        ...values,
        to: name,
        tour: tour,
        id: id,
        type: type,
      });
    reset();
    handleModal();
    navigate("/checkout");
  }

  return (
    <>
      <Overlay onClick={handleModal}></Overlay>
      <StyledModal onSubmit={handleSubmit(onSubmit)}>
        <Form color="white">
          <h5>Start your vacations now</h5>
          <ModalGrid>
            <FormRow label="First Name" error={errors?.firstName?.message}>
              <Input
                type="text"
                id="firstName"
                placeholder="e.x. Terry"
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="Last Name" error={errors?.lastName?.message}>
              <Input
                type="text"
                id="lastName"
                placeholder="e.x. Wilson"
                {...register("lastName", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="Travellers" error={errors?.travellers?.message}>
              <Input
                type="number"
                id="travellers"
                defaultValue={1}
                min={1}
                max={15}
                {...register("travellers", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="From" error={errors?.from?.message}>
              <Input
                type="text"
                id="from"
                placeholder="e.x. Athens"
                {...register("from", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="To" error={errors?.to?.message}>
              <Input
                type="text"
                id="location"
                defaultValue={name}
                disabled={true}
              />
            </FormRow>
            {type === "destinations" && (
              <FormRow label="Country" error={errors?.country?.message}>
                <Input
                  type="text"
                  id="country"
                  defaultValue={country}
                  disabled={true}
                />
              </FormRow>
            )}
            {type === "tours" && (
              <FormRow label="Tour" error={errors?.tour?.message}>
                <Input
                  type="text"
                  id="tour"
                  defaultValue={tour}
                  disabled={true}
                />
              </FormRow>
            )}
            <FormRow label="Depart" error={errors?.depart?.message}>
              <Input
                type="date"
                id="depart"
                {...register("depart", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="Return" error={errors?.return?.message}>
              <Input
                type="date"
                id="return"
                {...register("return", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <Button variation="secondary">Go to checkout</Button>
          </ModalGrid>
        </Form>
        <FaTimes onClick={handleModal} />
      </StyledModal>
    </>
  );
}

export default Modal;
