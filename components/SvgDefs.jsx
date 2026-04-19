// Star symbol used by the rating SVGs across the site.
// Matches the original <svg style="display:none"><defs><symbol id="star">...</symbol></defs></svg>.
export default function SvgDefs() {
  return (
    <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <symbol id="star" viewBox="0 0 14 14">
          <polygon points="7,1 8.8,5.2 13.5,5.5 10,8.5 11.1,13 7,10.5 2.9,13 4,8.5 0.5,5.5 5.2,5.2" />
        </symbol>
      </defs>
    </svg>
  );
}
