import WeirdDot from "../WeirdDot";
function ServiceCard(props) {

    return (
        <div className="flex w-96 justify-start px-9 py-8 flex-col rounded-xl ring-2  bg-white overflow-hidden relative ml-20">
            <p className="pb-14 pt-6">{props.jobTitle}</p>
            <p className="text-2xl pb-5 break-keep">{props.title}</p>
            <p className="text-sm text-stone-500 min-h-44">{props.description}</p>
            <WeirdDot top="79" left="75" scale=".6" zIndex="0" />
        </div>
    );

}
export default ServiceCard;
