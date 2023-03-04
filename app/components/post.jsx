import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers.js";

export const Post = ({ post }) => {
  const { contenido, titulo, imagen, url, publishedAt } = post;

  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen del blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
