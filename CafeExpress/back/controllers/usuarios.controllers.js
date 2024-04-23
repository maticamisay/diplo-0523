const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const newUser = req.body; // {username: 'matias', password: 'mati123', ...}
  try {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    await User.create({ ...newUser, password: hashedPassword });
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Credenciales invalidas" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }
    res.json({ message: "Usuario logueado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};
