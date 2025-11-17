import { Filter } from "bad-words";
import commentDao from "../dao/comment.dao.js";

const filter = new Filter();

export const commentsRestrictions = async (req, res, next) => {
  const { commentId } = req.params;
  try {
    const comment = await commentDao.getCommentById({ _id: commentId });

    if (!comment) {
      return res
        .status(404)
        .json({ message: "Imposible limpiar un comentario inexistente." });
    }

    const cleanedComment = filter.clean(comment.text);

    comment.text = cleanedComment;

    next();
  } catch (err) {
    return res.status(500).json({ message: "Error al validar palabras." });
  }
};
