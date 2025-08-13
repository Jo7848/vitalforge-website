// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import NeonButton from '../components/NeonButton';

const posts = [
  {
    id: 1,
    title: "Mastering the Basics: The Foundational Exercises",
    date: "August 13, 2025",
    excerpt: "In the fitness world, trends come and go — flashy machines, unconventional moves, and “secret” workout methods all promise quick results. But ask any seasoned athlete or trainer, and they’ll tell you: true strength and progress are built on mastering the basics...",
    content: (
      <>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          In the fitness world, trends come and go — flashy machines, unconventional moves, and “secret” workout methods all promise quick results. But ask any seasoned athlete or trainer, and they’ll tell you: true strength and progress are built on mastering the basics. Foundational exercises are the time-tested movements that target multiple muscle groups, improve functional strength, and set the stage for more advanced training.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Why Foundational Exercises Matter
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The basics are called “foundational” for a reason — they mimic natural human movement patterns like pushing, pulling, squatting, hinging, and carrying. These moves don’t just build muscle; they strengthen your body for everyday activities, reduce injury risk, and improve mobility. Whether you’re a beginner or a pro, these exercises should remain a cornerstone of your workouts.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          The Core Foundational Exercises
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Here are five essential exercises to focus on:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>1. Squats</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Often called the “king” of lower body exercises, squats target your quads, glutes, hamstrings, and core. They improve leg strength, boost athletic performance, and help with daily activities like climbing stairs or lifting objects from the ground.
              <br />
              <span style={{ fontStyle: 'italic' }}>Tip: Keep your chest up, engage your core, and drive through your heels to protect your knees and lower back.</span>
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>2. Deadlifts</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              The deadlift is a powerhouse move for building full-body strength, especially in your posterior chain (hamstrings, glutes, and back). It also enhances grip strength and posture.
              <br />
              <span style={{ fontStyle: 'italic' }}>Tip: Maintain a neutral spine, hinge at the hips (not the waist), and lift with control.</span>
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>3. Push-Ups</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              This classic bodyweight move works your chest, shoulders, triceps, and core. It’s a perfect measure of upper-body pushing strength and can be done anywhere.
              <br />
              <span style={{ fontStyle: 'italic' }}>Tip: Keep your body in a straight line from head to heels, and avoid letting your hips sag.</span>
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>4. Pull-Ups</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Pull-ups strengthen your lats, biceps, and upper back while improving grip and shoulder stability. If you can’t do a full pull-up yet, start with assisted versions or inverted rows.
              <br />
              <span style={{ fontStyle: 'italic' }}>Tip: Avoid swinging; pull with your back muscles rather than just your arms.</span>
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>5. Planks</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              While not as flashy as other exercises, planks are one of the best ways to develop a rock-solid core, which supports balance, posture, and injury prevention.
              <br />
              <span style={{ fontStyle: 'italic' }}>Tip: Keep your body rigid, engage your abs, and don’t let your hips drop or rise.</span>
            </p>
          </li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          How to Incorporate Them
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          For beginners, aim to practice these exercises 2–3 times a week, focusing on perfect form before adding weight or intensity. As you progress, increase resistance, volume, or variations to keep challenging your muscles.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
          **Sample Beginner Routine:**
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ lineHeight: '1.6' }}>Squats – 3 sets of 10–12 reps</li>
          <li style={{ lineHeight: '1.6' }}>Push-Ups – 3 sets of 8–12 reps</li>
          <li style={{ lineHeight: '1.6' }}>Deadlifts – 3 sets of 8–10 reps</li>
          <li style={{ lineHeight: '1.6' }}>Pull-Ups (or assisted) – 3 sets of 5–8 reps</li>
          <li style={{ lineHeight: '1.6' }}>Plank – 3 sets of 30–60 seconds</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Final Thoughts
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Mastering the basics isn’t about staying “simple” — it’s about building a strong, stable foundation that will support all your future training goals. Just like a house needs a solid base before adding floors, your body needs these fundamental movements before chasing advanced techniques. Train smart, be consistent, and you’ll see progress that lasts.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Next time you hit the gym, don’t just do the movement — own it. Feel every fiber fire, every contraction peak, and every rep bring you closer to your goal.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Nutrition for Transformation: Beyond the Calorie Count",
    date: "August 10, 2025",
    excerpt: "Calorie counting is just one piece of the puzzle. Discover how to fuel your body with the right macronutrients and micronutrients to optimize performance, recovery, and overall health...",
    content: (
      <>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          When it comes to fitness and body transformation, most people focus on one number: calories. And while calorie balance (eating less than you burn for fat loss, or more for muscle gain) is important, it’s only part of the story. True transformation happens when you go beyond the calorie count and focus on what those calories are made of, when you eat them, and how they support your goals.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          1. Quality Over Quantity
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
          Not all calories are equal.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          A 500-calorie meal of soda and pastries will fuel your body very differently than 500 calories of grilled chicken, brown rice, and vegetables. The first might spike your blood sugar and leave you hungry again in an hour, while the second delivers steady energy, supports muscle recovery, and keeps you full longer.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
          **Focus on:**
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          <li style={{ lineHeight: '1.6' }}>Lean proteins: chicken, fish, eggs, beans</li>
          <li style={{ lineHeight: '1.6' }}>Complex carbs: whole grains, sweet potatoes, oats</li>
          <li style={{ lineHeight: '1.6' }}>Healthy fats: avocados, nuts, olive oil</li>
          <li style={{ lineHeight: '1.6' }}>Micronutrient-rich foods: colorful fruits and vegetables</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          2. The Role of Macronutrients
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Understanding the “big three” nutrients—protein, carbs, and fats—is key to fueling your transformation.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          <li style={{ lineHeight: '1.6' }}>**Protein:** Builds and repairs muscle, keeps you satisfied.</li>
          <li style={{ lineHeight: '1.6' }}>**Carbs:** Provide energy for workouts and recovery.</li>
          <li style={{ lineHeight: '1.6' }}>**Fats:** Support hormone production and joint health.</li>
        </ul>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Instead of simply cutting calories, aim to balance your macros for your specific goals.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          3. Timing Matters
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          When you eat can influence performance and recovery.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          <li style={{ lineHeight: '1.6' }}>**Pre-workout:** Include some carbs and protein for energy and endurance.</li>
          <li style={{ lineHeight: '1.6' }}>**Post-workout:** Prioritize protein and carbs to replenish glycogen and repair muscles.</li>
          <li style={{ lineHeight: '1.6' }}>**Throughout the day:** Space meals evenly to avoid energy crashes.</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          4. Hydration Is Part of Nutrition
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Your transformation can stall if you overlook water.
          Hydration impacts muscle function, metabolism, and digestion. Aim for at least 2–3 liters daily, adjusting for activity level and climate.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          5. Mindful Eating
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Transformation isn’t just physical—it’s mental.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          <li style={{ lineHeight: '1.6' }}>Eat slowly and without distractions.</li>
          <li style={{ lineHeight: '1.6' }}>Listen to your body’s hunger and fullness cues.</li>
          <li style={{ lineHeight: '1.6' }}>Don’t label foods as “good” or “bad”—think balance, not perfection.</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          6. Supplements: The Extras
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Supplements can help, but they can’t replace a solid diet. Consider:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          <li style={{ lineHeight: '1.6' }}>Protein powder (if you struggle to hit your protein goal)</li>
          <li style={{ lineHeight: '1.6' }}>Omega-3s (if your diet lacks fatty fish)</li>
          <li style={{ lineHeight: '1.6' }}>Vitamins/minerals (based on deficiencies)</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          The Bottom Line
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Calories are a starting point, not the full picture. By focusing on food quality, nutrient balance, timing, hydration, and mindful habits, you’ll fuel your body for sustainable transformation—not just short-term change. Your nutrition should empower your workouts, recovery, and lifestyle—not feel like a punishment. Once you think beyond the calorie count, the results will follow naturally.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "The Mind-Muscle Connection: A Guide to Focused Training",
    date: "August 5, 2025",
    excerpt: "When you lift a weight, are you simply moving it from point A to point B… or are you truly engaging the muscle you want to work? That’s the difference between just exercising and training with purpose...",
    content: (
      <>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          When you lift a weight, are you simply moving it from point A to point B… or are you truly engaging the muscle you want to work? That’s the difference between just exercising and training with purpose.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The mind-muscle connection is the ability to focus on a specific muscle during a movement so it activates more effectively. It’s not magic — it’s science-backed, and it can completely change your training results.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Why the Mind-Muscle Connection Matters
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          When you consciously think about a muscle as you train it, your brain sends stronger electrical signals to that muscle’s fibers. This increases recruitment and can lead to better growth, strength, and control over time.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          For example, during a bicep curl, if you only think about moving the dumbbell, your shoulders or forearms might do more work than intended. But if you feel the biceps contracting through the whole range of motion, they take center stage.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          How to Build the Mind-Muscle Connection
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Like any skill, it takes practice. Here’s how you can develop it:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Slow Down Your Reps</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Rushing through exercises shifts focus to momentum. Slowing down — especially on the lowering phase — forces your muscles to stay under tension and helps you feel each contraction.
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Start with Lighter Weights</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Heavy loads can make you focus on “just finishing the lift.” Using lighter weights allows you to concentrate on form and muscle engagement without strain.
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Visualize the Movement</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Before starting a set, picture the muscle shortening and lengthening in your mind. Visualization primes your nervous system to fire the right muscle fibers.
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Touch the Muscle (When Safe)</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Lightly tapping or placing a hand on the target muscle during training can help your brain connect the feeling with the movement.
            </p>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Use Isolation Exercises</h4>
            <p style={{ lineHeight: '1.6', color: '#aaa' }}>
              Isolation moves like leg extensions or cable flyes allow you to hone in on one muscle without interference from others.
            </p>
          </li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Exercises to Practice the Connection
        </h3>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
          <li style={{ lineHeight: '1.6' }}>**Chest:** Cable flyes, dumbbell press (focus on squeezing at the top)</li>
          <li style={{ lineHeight: '1.6' }}>**Back:** Lat pulldowns (imagine pulling with your elbows, not your hands)</li>
          <li style={{ lineHeight: '1.6' }}>**Biceps:** Concentration curls (watch your bicep contract with each rep)</li>
          <li style={{ lineHeight: '1.6' }}>**Glutes:** Hip thrusts (pause and squeeze at the top)</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
          <li style={{ lineHeight: '1.6' }}>**Overloading Too Soon:** If you can’t feel the muscle working, drop the weight.</li>
          <li style={{ lineHeight: '1.6' }}>**Neglecting Form:** The connection won’t develop if your technique is sloppy.</li>
          <li style={{ lineHeight: '1.6' }}>**Training While Distracted:** Music is fine, but scrolling between sets can break mental focus.</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>
          Bringing It All Together
        </h3>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The mind-muscle connection isn’t just for bodybuilders. Whether you’re lifting for strength, aesthetics, or health, learning to mentally engage your muscles makes every rep count. Over time, you’ll notice better control, improved muscle definition, and less risk of injury.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Next time you hit the gym, don’t just do the movement — own it. Feel every fiber fire, every contraction peak, and every rep bring you closer to your goal.
        </p>
      </>
    ),
  },
];

const BlogPost = ({ post, onBack }) => (
  <div style={{ padding: '2rem', border: '1px solid #333', borderRadius: '8px', boxShadow: '0 0 15px #a855f7', backgroundColor: '#1a1a1a', textAlign: 'left' }}>
    <h1 className="blog-post-title" style={{ fontSize: '2.5rem', color: '#a855f7', marginBottom: '1rem' }}>{post.title}</h1>
    <p style={{ color: '#aaa', marginBottom: '1rem' }}>{post.date}</p>
    <div className="blog-post-content" style={{ lineHeight: '1.6', marginBottom: '2rem' }}>{post.content}</div>
    <NeonButton onClick={onBack}>
      ← Back to Blog
    </NeonButton>
  </div>
);

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem', backgroundColor: 'black', color: 'white' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .blog-main-title {
              font-size: 2rem !important;
            }
            .blog-subtitle {
              font-size: 1rem !important;
            }
            .blog-post-card {
              padding: 1.5rem !important;
            }
            .blog-post-card-title {
              font-size: 1.5rem !important;
            }
            .blog-post-title {
              font-size: 2rem !important;
            }
            .blog-post-content h3 {
              font-size: 1.25rem !important;
            }
            .blog-post-content h4 {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="blog-main-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '2rem' }}>
          VITALFORGE Blog
        </h1>
        <p className="blog-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '4rem' }}>
          Insights, tips, and science-backed advice to help you on your fitness journey.
        </p>

        {selectedPost ? (
          <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {posts.map(post => (
              <div key={post.id} className="blog-post-card" style={{
                backgroundColor: '#1a1a1a',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #333',
                boxShadow: '0 0 15px #a855f7',
                textAlign: 'left',
              }}>
                <h2 className="blog-post-card-title" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '0.5rem' }}>
                  {post.title}
                </h2>
                <p style={{ color: '#aaa', marginBottom: '1rem' }}>{post.excerpt}</p>
                <NeonButton onClick={() => setSelectedPost(post)}>
                  Read More
                </NeonButton>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;