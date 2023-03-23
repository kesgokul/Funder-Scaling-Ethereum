import Shadow from "./Shadow";
export default function Shadows() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-4 z-0">
        <Shadow w="400" h="400" />
      </div>
      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-48">
        <Shadow w="400" h="400" />
      </div>
    </div>
  );
}
