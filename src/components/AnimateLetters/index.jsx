const AnimateLetters = ({ letterClass, strArr}) => {
    return (
        <span className='name-wrapper'>
            {
                strArr.map((letter, i) => (
                    <span
                        key={letter + i}
                        className={letterClass}
                        id={letter}
                    >
                        {letter}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimateLetters;