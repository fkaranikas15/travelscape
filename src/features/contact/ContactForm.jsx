import { useForm } from "react-hook-form";
import Form from "../form/Form";
import FormRow from "../form/FormRow";
import Input from "../form/Input";
import { toast } from "react-hot-toast";
import { Button } from "../../ui/Button";
import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;

  &:focus {
    outline: 1px solid var(--color-primary);
  }
`;

function ContactForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit() {
    toast.success("The form successfully submitted");
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h5>Leave us your info</h5>
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Comment">
        <Textarea id="comment" placeholder="Write here..." />
      </FormRow>

      <Button variation="secondary">submit now</Button>
    </Form>
  );
}

export default ContactForm;
