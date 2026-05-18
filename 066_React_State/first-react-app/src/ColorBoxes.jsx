import ColorBox from './ColorBox.jsx'
import './ColorBoxes.css'

export default function ColorBoxes() {
    return (
        <div className="color-boxes">
            {(() => {
                const boxes = [];
                for (let i = 0; i < 9; i++) {
                    boxes.push(<ColorBox key={i} />);
                }
                return boxes;
            })()}
        </div>
    )
}