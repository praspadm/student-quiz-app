import React, { useState } from "react";
import { Button, Card, CardContent, Input, Textarea } from "@/components/ui";

const questions = [
  {
    section: "Multiple Choice Questions",
    type: "mcq",
    questions: [
      "The SI unit of mass is:",
      "Which of the following is a natural magnet?",
      "A screw is an example of which simple machine?",
      "What happens when a north pole of a magnet is brought near another north pole?",
      "Which instrument is used to measure time accurately?",
    ],
  },
  {
    section: "Fill in the Blanks",
    type: "fill",
    questions: [
      "The amount of matter in an object is called _______.",
      "A freely suspended magnet always points in the _______-_______ direction.",
      "A _______ is a simple machine that helps to lift loads using a rope and wheel.",
      "A thermometer is used to measure _______.",
      "The instrument used to measure mass is called a _______.",
    ],
  },
  {
    section: "Short Answer Questions",
    type: "short",
    questions: [
      "Define measurement and give an example of its importance in daily life.",
      "Name any two types of levers and give one example of each.",
      "Why is a wedge considered a simple machine? Give one example.",
      "What is induced magnetism? Explain with an example.",
      "What are the differences between natural and artificial magnets?",
    ],
  },
  {
    section: "Long Answer Questions",
    type: "long",
    questions: [
      "Explain the properties of magnets with suitable examples.",
      "What is an inclined plane? How does it help in reducing effort? Give two examples from daily life.",
      "List three precautions to take while measuring length using a ruler. Also, explain why we should measure from the zero mark.",
    ],
  },
];

export default function QuizApp() {
  const [answers, setAnswers] = useState({});

  const handleChange = (index, section, value) => {
    setAnswers({
      ...answers,
      [`${section}-${index}`]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Student Answers:", answers);
    alert("Answers submitted successfully!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Class 6 Science Test</h1>
      {questions.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{section.section}</h2>
            {section.questions.map((q, qIndex) => (
              <div key={qIndex} className="mb-4">
                <p className="mb-1">{q}</p>
                {section.type === "long" || section.type === "short" ? (
                  <Textarea
                    rows={section.type === "long" ? 4 : 2}
                    className="w-full"
                    onChange={(e) =>
                      handleChange(qIndex, section.section, e.target.value)
                    }
                  />
                ) : (
                  <Input
                    className="w-full"
                    onChange={(e) =>
                      handleChange(qIndex, section.section, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Button className="mt-4" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </div>
  );
}

