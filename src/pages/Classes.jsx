import ClassItem from "../components/Class.comp";

const Classes = () => {
  return (
    <div className="flex w-full flex-wrap gap-10">
      <ClassItem
        image={
          "https://www.shutterstock.com/image-photo/education-elementary-school-learning-people-600nw-303888209.jpg"
        }
        title={"Class Name"}
        description={"This is the description"}
        isAvailable
      />
      <ClassItem
        image={
          "https://www.shutterstock.com/image-photo/education-elementary-school-learning-people-600nw-303888209.jpg"
        }
        title={"Class Name"}
        description={"This is the description"}
        isAvailable
      />
      <ClassItem
        image={
          "https://www.shutterstock.com/image-photo/education-elementary-school-learning-people-600nw-303888209.jpg"
        }
        title={"Class Name"}
        description={"This is the description"}
      />
      <ClassItem
        image={
          "https://www.shutterstock.com/image-photo/education-elementary-school-learning-people-600nw-303888209.jpg"
        }
        title={"Class Name"}
        description={"This is the description"}
        isAvailable
      />
    </div>
  );
};

export default Classes;
