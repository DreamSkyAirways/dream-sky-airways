"use client";

import Link from "next/link";


export default function HeroOne() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <span style={styles.badge}>
            ✈️ Trusted Travel Partner
          </span>

          <h1 style={styles.title}>
            Explore The World With
            <br />
            <span style={styles.highlight}>
              Dream Sky Airways
            </span>
          </h1>

          <p style={styles.description}>
            Book flights, discover tour packages, and create
            unforgettable memories with affordable travel
            experiences across the globe.
          </p>

          <div style={styles.buttonContainer}>
            <Link href="/booking">
              <button style={styles.primaryButton}>
                Book Flight
              </button>
            </Link>

            <Link href="/tours">
              <button style={styles.secondaryButton}>
                Explore Tours
              </button>
            </Link>
          </div>

          <div style={styles.statsContainer}>
            <div>
              <h3 style={styles.statNumber}>25K+</h3>
              <p style={styles.statText}>Happy Travelers</p>
            </div>

            <div>
              <h3 style={styles.statNumber}>150+</h3>
              <p style={styles.statText}>Destinations</p>
            </div>

            <div>
              <h3 style={styles.statNumber}>24/7</h3>
              <p style={styles.statText}>Support</p>
            </div>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <div style={styles.circle}></div>

          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            alt="Dream Sky Airways"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#001F54,#003B8E,#0057D8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },

  overlay: {
    width: "100%",
    maxWidth: "1400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap",
  },

  content: {
    flex: 1,
    minWidth: "320px",
    color: "#ffffff",
  },

  badge: {
    background: "rgba(255,255,255,0.15)",
    padding: "10px 18px",
    borderRadius: "30px",
    display: "inline-block",
    marginBottom: "20px",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: "4rem",
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: "20px",
  },

  highlight: {
    color: "#7DD3FC",
  },

  description: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    maxWidth: "600px",
    color: "#dbeafe",
    marginBottom: "30px",
  },

  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "50px",
    flexWrap: "wrap",
  },

  primaryButton: {
    background: "#38BDF8",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "16px",
  },

  secondaryButton: {
    background: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    padding: "15px 30px",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "16px",
  },

  statsContainer: {
    display: "flex",
    gap: "50px",
    flexWrap: "wrap",
  },

  statNumber: {
    fontSize: "2rem",
    margin: 0,
    color: "#7DD3FC",
  },

  statText: {
    margin: "5px 0 0",
    color: "#dbeafe",
  },

  imageContainer: {
    flex: 1,
    minWidth: "320px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  circle: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  image: {
    width: "100%",
    maxWidth: "550px",
    borderRadius: "25px",
    objectFit: "cover",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 2,
  },
};