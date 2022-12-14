import User from "../models/UserModel.js";
import argon2 from "argon2";

// function login
export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // jika user tidak ditemukan
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  //   jika user ditemukan
  const match = await argon2.verify(user.password, req.body.password);

  //   jika password tidaak betul
  if (!match) return res.status(400).json({ msg: "Password Salah" });

  //   jika password cocok
  req.session.userId = user.uuid;
  //   get data user
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({
    status: true,
    message: "Berhasil Login",
    dataUser: { uuid, name, email, role },
  });
};

// function session
export const sessi = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda!" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  // jika user tidak ditemukan
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json({ user });
};

// function logout
export const logout = (req, res) => {
  req.session.destroy((err) => {
    // jika gagal logout
    if (err) return res.status(400).json({ msg: "Tidak dapat Logout" });
    // jika berhasil logout
    res.status(200).json({ msg: "Berhasil Logout" });
  });
};
