import { SyntheticEvent, useState } from "react";

function App() {
  interface MyComment {
    email: string;
    content: string;
    timestamp: number;
  }
  
  const Comentario = ({ comment }: { comment: MyComment }) => (
    <div className="bg-white p-4 my-2 rounded-md">
      <p><strong>{comment.email}</strong></p>
      <p>{comment.content}</p>
    </div>
  )
  
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  const [comments, setComments] = useState<MyComment[]>(()=>{
    const storedComments = localStorage.getItem('comments')
    if(!storedComments) return []
    return JSON.parse(storedComments)
  });
  
  function addComment(comment:MyComment) {
    setComments((state)=>{
      const newState = [comment, ...state]
      localStorage.setItem("comments", JSON.stringify(newState))
      return newState
    })
  }
  
  function handleSubmitt(evnt: SyntheticEvent) {
    evnt.preventDefault();
    const newComment: MyComment = {
      email,
      content,
      timestamp: Date.now(),
    };

    addComment(newComment);
    setEmail('');
    setContent('');
  }

  return (
    <>
      <div className="w-full my-8 flex items-center justify-center">
        <form
          className="flex flex-col gap-6 bg-slate-200 rounded-2xl p-12 w-2/4"
          onSubmit={handleSubmitt}
        >
          <h1 className="text-2xl font-semibold">Seção de comentários</h1>
          <aside className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              className="rounded-md p-2 drop-shadow-md"
              type="text"
              required
              minLength={8}
              maxLength={30}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </aside>
          <aside className="flex flex-col gap-2">
            <label htmlFor="comment">Comentário:</label>
            <textarea
              className="rounded-lg resize-none p-2 drop-shadow-md"
              name="comment"
              cols={30}
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </aside>
          <button
            className="bg-zinc-400 rounded-md p-2 text-white hover:bg-zinc-500 hover:-translate-y-1 transition-all font-bold"
            type="submit"
          >
            Enviar comentário
          </button>
          <hr className="bg-slate-800 h-1" />
          {comments.length > 0 ? (
            comments.sort((a, b) => b.timestamp - a.timestamp).map((comment, index) => (
              <Comentario key={index} comment={comment} />
            ))
          ) : (
            <h2>Seja o primeiro a comentar!</h2>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
