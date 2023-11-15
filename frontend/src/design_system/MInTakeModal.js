import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateIntake } from "../utils/api";
import { AuthState } from "../context/AuthProvider";

export default function InTakeModal({ show }) {
  const [isOpen, setOpen] = useState(false);
  const [curStep, setCurStep] = useState(0);
  const [formData, setFormData] = useState({ intake: true });
  const handleClose = () => setOpen(false);
  const { setAuth } = AuthState();

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const steps = [
    {
      title: "Gender:",
      attribute: "gender",
      options: ["Male", "Female", "None-binary", "Prefer not to say"],
      type: "radio",
    },
    {
      title: "How you identify yourself:",
      attribute: "identify",
      options: [
        "American Indian or Alaskan Native",
        "Asian / Pacific Islander",
        "Black or African American",
        "Hispanic",
        "White / Caucasian",
        "Other",
        "Prefer not to say",
      ],
      type: "radio",
    },
    {
      title: "What is your age?",
      attribute: "age",
      options: [
        "Under 12 years old",
        "12-17 years old",
        "18-24 years old",
        "25-34 years old",
        "35-44 years old",
        "45-54 years old",
        "55-64 years old",
        "65-74 years old",
        "75 years or older",
        "Prefer not to say",
      ],
      type: "radio",
    },
    {
      title: "What brings you to Zappt?",
      attribute: "reason",
      options: [
        "New date ideas",
        "Explore new spots",
        "Looking for something in particular",
        "Just hear for fun",
        "Prefer not to say",
      ],
      type: "checkbox",
    },
    {
      title: "Ideal night out?",
      attribute: "ideal",
      options: [
        "Craft cocktails",
        "Good beer",
        "Swanky vibe",
        "High energy",
        "Cozy spot",
        "Snacks on hand",
        "Lots around to walk to",
        "Meeting new people",
        "None of these",
      ],
      type: "checkbox",
    },
  ];

  const RadioGroup = ({ attribute, options, formData, setFormData }) => (
    <>
      {options.map((option, index) => (
        <Form.Check
          type="radio"
          name={attribute}
          id={option + "_" + index}
          key={option + "_" + index}
          label={option}
          value={option}
          onChange={(e) =>
            setFormData({ ...formData, [attribute]: e.target.value })
          }
          checked={option === formData[attribute]}
        />
      ))}
    </>
  );

  const CheckBoxGroup = ({ attribute, options, formData, setFormData }) => (
    <>
      {options.map((option, index) => {
        const isIncluded = formData[attribute]?.includes(option);
        return (
          <Form.Check
            type="checkbox"
            name={attribute}
            id={option + "_" + index}
            key={option + "_" + index}
            label={option}
            value={option}
            onChange={(e) =>
              setFormData((prevData) => {
                const updatedData = prevData[attribute]
                  ? [...prevData[attribute]]
                  : [];
                if (!isIncluded) {
                  updatedData.push(e.target.value);
                } else {
                  const idx = updatedData.indexOf(e.target.value);
                  updatedData.splice(idx, 1);
                }
                return { ...prevData, [attribute]: updatedData };
              })
            }
            checked={isIncluded}
          />
        );
      })}
    </>
  );

  const handleSubmitChange = () => {
    const abortController = new AbortController();
    updateIntake({ formData }, abortController.signal)
      .then((data) => {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth(data);
        setOpen(false);
      })
      .catch("null");
  };

  return (
    <Modal show={isOpen} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>{steps[curStep].title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {steps[curStep].type === "radio" && (
          <RadioGroup
            attribute={steps[curStep].attribute}
            options={steps[curStep].options}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {steps[curStep].type === "checkbox" && (
          <CheckBoxGroup
            attribute={steps[curStep].attribute}
            formData={formData}
            setFormData={setFormData}
            options={steps[curStep].options}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        {curStep === steps.length - 1 ? (
          <Button variant="primary" onClick={handleSubmitChange}>
            Save Changes
          </Button>
        ) : (
          <>
            <Button
              variant="secondary"
              onClick={() => setCurStep(curStep - 1)}
              disabled={curStep === 0}
            >
              Prev
            </Button>
            <Button variant="primary" onClick={() => setCurStep(curStep + 1)}>
              Next
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
