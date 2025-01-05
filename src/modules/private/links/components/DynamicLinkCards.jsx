import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { nanoid } from "nanoid"; // For generating unique IDs
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const DynamicLinkCards = () => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      links: [], // Initialize the links array
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links", // Name for the dynamic field array
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Validate based on platform selection
  const validateLink = (platform, link) => {
    const youtubeRegex = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/;
    const githubRegex = /^https:\/\/github\.com\/[\w-]+\/[\w-]+$/;

    switch (platform) {
      case "youtube":
        return youtubeRegex.test(link);
      case "github":
        return githubRegex.test(link);
      default:
        return false;
    }
  };

  // Add new link card
  const addLink = () => {
    append({
      id: nanoid(), // Unique ID for each link card
      platform: "youtube", // Default platform
      link: "",
    });
  };

  // Handle link input change (for validation)
  const handleLinkChange = (index, value) => {
    const platform = getValues(`links[${index}].platform`);
    const isValid = validateLink(platform, value);
    setValue(`links[${index}].isValid`, isValid);
  };

  // Reorder the fields when dragging ends
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list, do nothing
    if (!destination) return;

    const items = Array.from(fields);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    // Update the state with the new order
    setValue("links", items);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ marginBottom: "20px" }}
            >
              {/* Dynamic Link Cards */}
              {fields.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="link-card"
                      style={{
                        ...provided.draggableProps.style,
                        border: "1px solid #ccc",
                        padding: "10px",
                        margin: "5px 0",
                        backgroundColor: "white",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Controller
                        name={`links[${index}].platform`}
                        control={control}
                        defaultValue={item.platform}
                        render={({ field }) => (
                          <select
                            {...field}
                            style={{ width: "100%", marginBottom: "10px" }}
                          >
                            <option value="youtube">YouTube</option>
                            <option value="github">GitHub</option>
                            {/* Add more platforms as needed */}
                          </select>
                        )}
                      />

                      <Controller
                        name={`links[${index}].link`}
                        control={control}
                        defaultValue={item.link}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Enter the link"
                            onBlur={() => handleLinkChange(index, field.value)}
                            style={{ width: "100%", marginBottom: "10px" }}
                          />
                        )}
                      />

                      {!getValues(`links[${index}].isValid`) && (
                        <span style={{ color: "red" }}>Invalid link!</span>
                      )}

                      <button
                        type="button"
                        onClick={() => remove(index)}
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          padding: "5px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button
        type="button"
        onClick={addLink}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Link
      </button>

      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#008CBA",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Submit
      </button>
    </form>
  );
};
