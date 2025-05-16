import React, { useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || rating === 0) return;

    const newReview = { name, message, rating };
    setReviews([newReview, ...reviews]);

    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className="mb-5" style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Leave a Review</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Your Review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />
        <div style={styles.rating}>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => setRating(num)}
              style={{
                ...styles.star,
                color: num <= rating ? "#f5c518" : "#444",
                transform: num === rating ? "scale(1.2)" : "scale(1)",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit" style={styles.button}>
          Submit Review
        </button>
      </form>

      <h3 style={styles.subHeading}>What Others Are Saying</h3>
      <div style={styles.reviewGrid}>
        {reviews.map((rev, index) => (
          <div key={index} style={styles.reviewCard}>
            <h4 style={styles.reviewerName}>{rev.name}</h4>
            <p style={styles.reviewText}>{rev.message}</p>
            <div style={styles.stars}>
              {"★".repeat(rev.rating)}
              {"☆".repeat(5 - rev.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "3rem 1rem",
    maxWidth: "960px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#1e1e1e",
    minHeight: "100vh",
    color: "#f5f5f5",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#ffffff",
  },
  subHeading: {
    fontSize: "1.75rem",
    marginTop: "3rem",
    marginBottom: "1.5rem",
    color: "#ffffff",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    background: "#2b2b2b",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
  },
  input: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #444",
    outline: "none",
    backgroundColor: "#ffffff",
    color: "#000",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
  },
  textarea: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #444",
    outline: "none",
    minHeight: "120px",
    backgroundColor: "#ffffff",
    color: "#000",
    resize: "vertical",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    gap: "0.6rem",
    fontSize: "2rem",
    cursor: "pointer",
  },
  star: {
    cursor: "pointer",
    transition: "color 0.3s ease, transform 0.2s ease",
  },
  button: {
    backgroundColor: "#00b4d8",
    color: "#fff",
    padding: "0.8rem 1.2rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "center",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem",
  },
  reviewCard: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "1.25rem",
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    color: "#111",
  },
  reviewerName: {
    marginBottom: "0.5rem",
    fontWeight: 600,
    fontSize: "1.1rem",
  },
  reviewText: {
    marginBottom: "0.5rem",
    fontSize: "0.95rem",
    lineHeight: 1.4,
  },
  stars: {
    color: "#f5c518",
    fontSize: "1.2rem",
  },
};

export default ReviewSection;
