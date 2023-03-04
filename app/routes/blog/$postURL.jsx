import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers.js";

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Entrada no encontrada",
      description: "GuitarLA, Blog de música, entrada no encontrado",
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, ventas de guitarras, entrada ${data.data[0].attributes.titulo}`,
  };
}

export async function loader({ params }) {
  const { postURL } = params;

  const post = await getPost(postURL);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada.",
    });
  }

  return post;
}

const Post = () => {
  const post = useLoaderData();

  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen del blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
