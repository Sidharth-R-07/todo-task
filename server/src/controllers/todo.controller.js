const todos = [];

export const addTodo = (req, res) => {
  try {
    const { todo } = req.body;

    todos.push(todo);
    return res.status(201).json({
      success: true,
      message: "Todo added successfully",
    });
  } catch (error) {
    console.log("ERROR", error);
    return res.json({
      success: false,
      error: error,
    });
  }
};

export const getTodo = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};
