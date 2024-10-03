import jwt from "jsonwebtoken";

// Função para limpar o token
export const cleanToken = (token) => {
  return token.replace(/^['"]|['"]$/g, "");
};

// Middleware para autenticar qualquer usuário
export const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Token não fornecido ou malformado",
      });
    }

    const token = authHeader.split(" ")[1];
    const cleanTokenValue = cleanToken(token);

    const decoded = jwt.verify(cleanTokenValue, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Token inválido",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
};

// Middleware para autenticar um administrador
export const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Token não fornecido ou malformado",
      });
    }

    const token = authHeader.split(" ")[1];
    const cleanTokenValue = cleanToken(token);

    const decoded = jwt.verify(cleanTokenValue, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Token inválido",
      });
    }

    if (!decoded.isAdmin) {
      return res.status(403).json({
        message:
          "Acesso negado. Apenas administradores podem acessar este recurso",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
};
