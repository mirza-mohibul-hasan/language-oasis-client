const PopularClassCard = ({singleClass}) => {
    const {classImage, className, instructorEmail, instructorName, price, seats, students} = singleClass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className="w-96" src={classImage} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Contact: {instructorEmail}</p>
                <p>${price}</p>
                <p>Available seats: {seats}</p>
                <p>Already Enrolled: {students}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;