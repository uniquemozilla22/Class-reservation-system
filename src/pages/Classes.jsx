import ClassItem from "../components/Class.comp";

const Classes = () => {
  return (
    <div className="flex w-full flex-wrap gap-10">
      {[1, 2, 3, 4, 5].map((data, index) => {
        return (
          <ClassItem
            image={
              "https://www.shutterstock.com/image-photo/education-elementary-school-learning-people-600nw-303888209.jpg"
            }
            title={"Class Name"}
            description="This is the description"
            isAvailable
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Classes;
