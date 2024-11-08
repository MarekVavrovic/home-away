import { FaStar } from "react-icons/fa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  // Temporary data for demonstration
  const rating = 4.7;
  const count = 100;

  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
