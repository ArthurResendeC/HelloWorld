interface GameProps{
    title:string;
    cover:string;
    onRemove: () => void
}
import ActionBtn from "./ActionBtn";

export default function Game({title, cover, onRemove}:GameProps) {
    return (
        <div className="flex gap-6 flex-wrap">
              <img src={cover} alt="" width={130} />
              <div className="flex flex-col gap-2 text-white font-semibold">
                <h2 className=" text-4xl">{title}</h2>
                <ActionBtn
                  text="Remover"
                  type="button"
                  onClick={onRemove}
                />
              </div>
            </div>
    )
}