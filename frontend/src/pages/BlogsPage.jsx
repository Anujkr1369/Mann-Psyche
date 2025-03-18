import React, { useState } from "react";
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const blogs = [
  {
    title: "BRUSHING MISTAKES",
    excerpt: "Are you brushing your teeth wrong? Top 5 mistakes to avoid. Are common brushing habits damaging your dental health?",
    image: assets.part21, 
    date: "January 5, 2024",
    content: `
<h2>Are You Brushing Your Teeth Wrong? Top 5 Mistakes to Avoid</h2>

<p><strong>Are common brushing habits damaging your dental health?</strong></p>

<p>Maintaining good oral hygiene is essential for overall health, but many people unknowingly make mistakes while brushing their teeth. These errors can lead to cavities, gum disease, and even enamel erosion. Let’s explore five common brushing mistakes and how to fix them to ensure a healthier smile.</p>

<h3>1. Brushing Too Hard</h3>
<p>One of the most frequent mistakes people make is applying too much pressure while brushing. While it might seem like vigorous scrubbing cleans teeth better, excessive force can wear down enamel and irritate gums, leading to sensitivity and gum recession.</p>
<p><strong>Correct Technique:</strong> Use a soft-bristled toothbrush and apply gentle, circular motions. Let the bristles do the work rather than scrubbing forcefully.</p>

<h3>2. Not Brushing Long Enough</h3>
<p>Most people don’t brush for the recommended time. The American Dental Association (ADA) suggests brushing for at least two minutes twice a day. Rushing through brushing can leave plaque behind, increasing the risk of cavities and gum disease.</p>
<p><strong>Correct Technique:</strong> Set a timer or use an electric toothbrush with a built-in timer to ensure you reach the full two-minute mark.</p>

<h3>3. Using the Wrong Toothbrush</h3>
<p>Using a hard-bristled toothbrush or one that is too large can do more harm than good. Hard bristles can erode enamel and cause gum irritation, while an oversized brush head may not clean all areas effectively.</p>
<p><strong>Correct Technique:</strong> Choose a toothbrush with soft bristles and a comfortable grip. An electric toothbrush can also be a great investment for optimal plaque removal.</p>

<h3>4. Neglecting the Gumline and Tongue</h3>
<p>Brushing only the teeth and ignoring the gumline can lead to plaque buildup and gum disease. Similarly, failing to clean the tongue allows bacteria to thrive, causing bad breath and potential infections.</p>
<p><strong>Correct Technique:</strong> Angle your toothbrush at 45 degrees towards the gumline and use gentle strokes. Don’t forget to brush your tongue or use a tongue scraper to remove bacteria.</p>

<h3>5. Not Replacing Your Toothbrush Regularly</h3>
<p>Using an old, frayed toothbrush is ineffective and can introduce bacteria into your mouth. The ADA recommends replacing your toothbrush every three to four months or sooner if the bristles appear worn out.</p>
<p><strong>Correct Technique:</strong> Make it a habit to change your toothbrush with each new season or after an illness to maintain optimal hygiene.</p>

<h3>Final Thoughts</h3>
<p>Brushing your teeth properly is a small daily habit that makes a significant impact on your dental health. By avoiding these common mistakes and following correct brushing techniques, you can protect your smile for years to come.</p>

<p><strong>Need more dental care tips? Stay tuned for expert advice on maintaining the best oral hygiene practices!</strong></p>

<p><strong>SEO Keywords:</strong> brushing mistakes, correct tooth brushing technique, dental health tips</p>

    `
  },
  {
    title: "The Flossing Revelation: Have You Been Doing It Wrong All Along?",
    excerpt: `Could improper flossing be harming your gums?
Flossing is a crucial part of oral hygiene, yet many people either skip it or do it incorrectly. Poor flossing techniques can lead to gum irritation, plaque buildup, and even gum disease. Let's explore the most common flossing mistakes and the right way to floss for optimal gum health
`,
    image: assets.part1,
    date: "February 12, 2024",
    content: `
<h3>1. Snapping the Floss Between Teeth</h3>
<p>Many people force the floss between their teeth, which can cause gum damage, irritation, and even bleeding. Flossing should be gentle to prevent harming the delicate gum tissue.</p>
<p><strong>Correct Technique:</strong> Glide the floss gently between your teeth, following the natural curve of each tooth. Avoid snapping it against your gums.</p>

<h3>2. Not Flossing Below the Gumline</h3>
<p>Simply sliding the floss up and down between your teeth isn’t enough. Plaque and bacteria hide just below the gumline, and failing to clean these areas can lead to inflammation and gum disease.</p>
<p><strong>Correct Technique:</strong> Curve the floss into a "C" shape around each tooth and gently slide it under the gumline to remove hidden plaque.</p>

<h3>3. Using the Same Section of Floss for All Teeth</h3>
<p>Reusing the same section of floss spreads bacteria rather than removing it, reducing the effectiveness of flossing.</p>
<p><strong>Correct Technique:</strong> Use a clean segment of floss for each tooth to prevent transferring bacteria and plaque buildup.</p>

<h3>4. Flossing Too Aggressively or Infrequently</h3>
<p>Flossing too harshly can cause gum recession, while infrequent flossing allows plaque to harden into tartar, which can only be removed by a dentist.</p>
<p><strong>Correct Technique:</strong> Floss once a day with a gentle touch. If your gums bleed initially, don’t stop—consistent flossing will strengthen them over time.</p>

<h3>5. Not Flossing at All</h3>
<p>Skipping flossing allows plaque and food particles to accumulate between teeth, increasing the risk of cavities, bad breath, and gum disease.</p>
<p><strong>Correct Technique:</strong> Make flossing a daily habit alongside brushing to maintain optimal oral health.</p>

<h3>Final Thoughts</h3>
<p>Flossing properly is just as important as brushing. By avoiding these common mistakes and using the correct technique, you can protect your gums and teeth for a lifetime.</p>
<p><strong>Want more oral care tips? Stay tuned for expert advice on achieving the best dental hygiene practices!</strong></p>

    `
  },
  {
    title: "The Dentist’s Secret: The Best Time to Eat for Optimal Oral Health",
    excerpt: `Most people focus on what they eat to maintain good oral health, but when you eat is just as important. Your eating schedule plays a vital role in preventing tooth decay, enamel erosion, and gum disease. By understanding the best times to eat—and when to avoid snacking—you can keep your teeth stronger and healthier for years to come
`,
    image: assets.part42,
    date: "February 12, 2024",
    content: `
<h2>When Should You Avoid Eating to Protect Your Teeth?</h2>
<p>Most people focus on what they eat to maintain good oral health, but <strong>when you eat</strong> is just as important. Your eating schedule plays a vital role in preventing tooth decay, enamel erosion, and gum disease. By understanding the best times to eat—and when to avoid snacking—you can keep your teeth stronger and healthier for years to come.</p>

<h3>Why Timing Matters for Your Teeth</h3>
<p>Every time you eat, your mouth goes through a cycle. When you consume food, especially sugary or acidic foods, bacteria in your mouth produce acids that attack your enamel. However, saliva acts as a natural defense, helping to neutralize acids and remineralize your teeth.</p>
<p>If you constantly snack or eat at irregular times, your saliva doesn’t get a chance to do its job, leading to an increased risk of cavities and tooth decay.</p>
<p>Let’s explore the best and worst times to eat for optimal oral health.</p>

<h3>The Best Times to Eat for Healthy Teeth</h3>

<h4>1. Eat at Regular Mealtimes</h4>
<ul>
  <li><strong>✅ Why it’s good:</strong> When you eat meals at set times (e.g., breakfast, lunch, and dinner), your body produces more saliva to help break down food and protect your teeth.</li>
  <li><strong>✅ Tip:</strong> Stick to a consistent eating schedule to allow your saliva to remineralize your teeth between meals.</li>
</ul>

<h4>2. Wait Before Brushing After Eating</h4>
<ul>
  <li><strong>✅ Why it’s good:</strong> Brushing immediately after eating—especially after acidic foods (like citrus or soda)—can weaken enamel because your teeth are in a softened state.</li>
  <li><strong>✅ Tip:</strong> Wait 30 to 60 minutes before brushing to give your saliva time to neutralize acids and strengthen your enamel.</li>
</ul>

<h4>3. Choose Tooth-Friendly Snacks</h4>
<ul>
  <li><strong>✅ Why it’s good:</strong> If you do snack, opt for cheese, nuts, or crunchy fruits and vegetables that help clean teeth and stimulate saliva production.</li>
  <li><strong>✅ Tip:</strong> Avoid sticky, sugary snacks that linger on your teeth, as they can fuel bacteria and cause cavities.</li>
</ul>

<h3>The Worst Times to Eat for Your Teeth</h3>

<h4>1. Late-Night Snacking</h4>
<ul>
  <li><strong>❌ Why it’s bad:</strong> Saliva production naturally decreases at night, so eating before bed leaves food particles and bacteria on your teeth for longer, increasing the risk of decay.</li>
  <li><strong>❌ Tip:</strong> Avoid eating at least one hour before bedtime, and always brush before sleeping.</li>
</ul>

<h4>2. Constant Snacking Throughout the Day</h4>
<ul>
  <li><strong>❌ Why it’s bad:</strong> Frequent snacking doesn’t give your saliva enough time to neutralize acids, leading to continuous enamel erosion.</li>
  <li><strong>❌ Tip:</strong> If you feel hungry between meals, drink water or chew sugar-free gum to stimulate saliva flow instead of reaching for snacks.</li>
</ul>

<h4>3. Drinking Sugary or Acidic Beverages Too Often</h4>
<ul>
  <li><strong>❌ Why it’s bad:</strong> Sipping on soda, juice, or coffee throughout the day exposes your teeth to constant acid attacks, weakening your enamel over time.</li>
  <li><strong>❌ Tip:</strong> If you consume acidic drinks, use a straw to minimize contact with teeth and rinse with water afterward.</li>
</ul>

<h3>Final Thoughts</h3>
<p>Protecting your teeth isn’t just about avoiding sweets—it’s about timing your meals and snacks wisely. By sticking to regular mealtimes, limiting late-night eating, and giving your saliva time to do its job, you can prevent cavities, strengthen enamel, and maintain a healthier, brighter smile.</p>
<p><strong>Want more expert tips on oral health? Stay tuned for more dentist-approved advice!</strong></p>

    `
  },
  {
    title: "Mouthwash Myths Debunked: What Really Works for Oral Hygiene?",
    excerpt: `Are all mouthwashes created equal, and do they truly benefit your oral health?
Mouthwash is often marketed as an essential part of oral hygiene, promising fresh breath, cavity prevention, and healthier gums. But how much of this is true, and how much is just clever advertising? Are all mouthwashes equally effective, or are some better than others?
In this article, we’ll break down common myths about mouthwash, explore different types, and reveal the truth about whether it truly benefits your oral health.
`,
    image: assets.part54,
    date: "February 12, 2024",
    content: `
<h2>Mouthwash Myths Debunked: What Really Works for Oral Hygiene?</h2>
<p>Are all mouthwashes created equal, and do they truly benefit your oral health?</p>
<p>Mouthwash is often marketed as an essential part of oral hygiene, promising fresh breath, cavity prevention, and healthier gums. But how much of this is true, and how much is just clever advertising? Are all mouthwashes equally effective, or are some better than others?</p>
<p>In this article, we’ll break down common myths about mouthwash, explore different types, and reveal the truth about whether it truly benefits your oral health.</p>

<h3>Myth #1: Mouthwash Can Replace Brushing and Flossing</h3>
<ul>
    <li><strong>🚫 False!</strong> While mouthwash can help kill bacteria and freshen breath, it cannot remove plaque or food particles like brushing and flossing do. If you skip these steps, bacteria and plaque will still build up, leading to cavities and gum disease.</li>
    <li><strong>✅ The Truth:</strong> Mouthwash should be used alongside brushing and flossing—not as a substitute. Think of it as a bonus step in your routine.</li>
</ul>

<h3>Myth #2: All Mouthwashes Are the Same</h3>
<ul>
    <li><strong>🚫 False!</strong> There are different types of mouthwash, and each serves a specific purpose. Using the wrong one may not provide the benefits you need.</li>
    <li><strong>✅ The Truth:</strong> Here’s a breakdown of the main types of mouthwash:</li>
</ul>
<ul>
    <li><strong>Cosmetic Mouthwash:</strong> Primarily for fresh breath, but doesn’t kill bacteria or provide lasting benefits.</li>
    <li><strong>Fluoride Mouthwash:</strong> Helps strengthen enamel and prevent cavities, great for those prone to tooth decay.</li>
    <li><strong>Antiseptic Mouthwash (e.g., Listerine):</strong> Contains alcohol or chlorhexidine to kill bacteria and reduce plaque, but may cause dryness with prolonged use.</li>
    <li><strong>Alcohol-Free Mouthwash:</strong> Ideal for people with sensitive gums or dry mouth, as it cleans without the harsh effects of alcohol.</li>
    <li><strong>Prescription Mouthwash:</strong> Contains stronger antibacterial agents for treating gum disease or post-surgical oral care.</li>
</ul>

<h3>Myth #3: Alcohol-Based Mouthwashes Are the Best</h3>
<ul>
    <li><strong>🚫 Not necessarily!</strong> While alcohol-based mouthwashes kill bacteria, they can also dry out your mouth, reducing saliva production. Since saliva naturally protects teeth, reduced saliva can actually increase the risk of cavities and bad breath over time.</li>
    <li><strong>✅ The Truth:</strong> If you have dry mouth, sensitive gums, or frequent irritation, an alcohol-free mouthwash is a better choice.</li>
</ul>

<h3>Myth #4: Mouthwash Completely Eliminates Bad Breath</h3>
<ul>
    <li><strong>🚫 False!</strong> Mouthwash may temporarily mask bad breath, but if you have chronic bad breath (halitosis), the root cause could be:</li>
</ul>
<ul>
    <li>Poor oral hygiene</li>
    <li>Gum disease</li>
    <li>Dry mouth</li>
    <li>Underlying health conditions (e.g., acid reflux, diabetes)</li>
</ul>
<ul>
    <li><strong>✅ The Truth:</strong> The best way to eliminate bad breath is by maintaining proper oral hygiene, drinking enough water, and addressing any underlying health issues.</li>
</ul>

<h3>Myth #5: You Should Rinse with Water After Using Mouthwash</h3>
<ul>
    <li><strong>🚫 False!</strong> Many people rinse their mouths with water after using mouthwash, washing away its active ingredients before they have time to work.</li>
    <li><strong>✅ The Truth:</strong> For best results, do not rinse, eat, or drink for at least 30 minutes after using mouthwash.</li>
</ul>

<h3>How to Use Mouthwash Correctly</h3>
<p>To get the most benefits from mouthwash, follow these simple steps:</p>
<ul>
    <li>✅ Use the right type for your specific needs.</li>
    <li>✅ Measure the correct amount (usually 20–30 mL, or about 4 teaspoons).</li>
    <li>✅ Swish for 30–60 seconds—no less, no more.</li>
    <li>✅ Do not rinse with water afterward.</li>
    <li>✅ Use it at the right time—after brushing and flossing for best results.</li>
</ul>

<h3>Final Thoughts</h3>
<p>Mouthwash can be a great addition to your oral hygiene routine, but it’s not a miracle cure. Choosing the right type, using it correctly, and combining it with brushing, flossing, and regular dental check-ups is the key to maintaining healthy teeth and gums.</p>
<p><strong>Want more expert oral care tips? Stay tuned for more dentist-approved advice on keeping your smile bright and healthy!</strong></p>

    `
  },
   {
    title: "Electric vs Manual Toothbrushes: Which Cleans Better?",
    excerpt: `Does investing in an electric toothbrush lead to better dental health?
When it comes to maintaining good oral hygiene, one of the biggest questions people have is: Should I use an electric toothbrush or a manual one? While both can effectively clean your teeth, studies suggest that electric toothbrushes may offer advantages in plaque removal and gum health. But is the investment really worth it?
In this blog, we’ll compare electric and manual toothbrushes based on effectiveness, ease of use, cost, and overall impact on oral health.`,
    image: assets.part61,
    date: "February 12, 2024",
    content: `
<h2>Effectiveness: Which Removes More Plaque?</h2>

<h3>Electric Toothbrushes: More Power, Better Results</h3>
<ul>
    <li>✅ Studies show that electric toothbrushes remove up to 21% more plaque than manual toothbrushes over a three-month period.</li>
    <li>✅ Many electric brushes have rotating, oscillating, or sonic vibrations that clean more effectively than manual brushing.</li>
    <li>✅ Some models have pressure sensors to prevent brushing too hard, reducing gum damage.</li>
</ul>

<h3>Manual Toothbrushes: Still Effective with Proper Technique</h3>
<ul>
    <li>✅ A manual toothbrush can be just as effective if used correctly—with proper technique and brushing for two minutes.</li>
    <li>✅ It’s all about consistency—brushing twice a day and reaching all areas of the mouth.</li>
</ul>

<p><strong>🏆 Winner:</strong> Electric toothbrush – It provides superior plaque removal with less effort.</p>

<h2>Gingivitis Prevention: Does One Protect Your Gums Better?</h2>

<h3>Electric Toothbrushes: Gentler on Gums</h3>
<ul>
    <li>✅ Because electric brushes control pressure, they help prevent gum recession and irritation.</li>
    <li>✅ Oscillating and sonic movements help reduce gingivitis more effectively than manual brushing.</li>
</ul>

<h3>Manual Toothbrushes: Risk of Brushing Too Hard</h3>
<ul>
    <li>❌ Many people brush too hard with manual toothbrushes, which can cause gum recession and enamel wear.</li>
    <li>✅ Using a soft-bristled brush and a proper brushing technique can still maintain healthy gums.</li>
</ul>

<p><strong>🏆 Winner:</strong> Electric toothbrush – Less pressure means healthier gums.</p>

<h2>Ease of Use: Which Is More User-Friendly?</h2>

<h3>Electric Toothbrushes: Effortless Cleaning</h3>
<ul>
    <li>✅ Requires less manual effort, making it ideal for people with arthritis, disabilities, or limited mobility.</li>
    <li>✅ Many models have built-in timers, ensuring you brush for the recommended two minutes.</li>
</ul>

<h3>Manual Toothbrushes: No Charging Required</h3>
<ul>
    <li>✅ No need to charge or replace batteries—just grab and brush.</li>
    <li>✅ Lightweight and portable, making it easy to travel with.</li>
</ul>

<p><strong>🏆 Winner:</strong> Electric toothbrush – Easier to use, especially for those with mobility issues.</p>

<h2>Cost: Is an Electric Toothbrush Worth the Investment?</h2>

<h3>Electric Toothbrushes: Higher Upfront Cost</h3>
<ul>
    <li>💰 Prices range from ₹1,500 to ₹10,000+, depending on features.</li>
    <li>💰 Replacement brush heads cost more than manual brushes.</li>
    <li>✅ Long-term benefits may outweigh the cost by reducing dental issues.</li>
</ul>

<h3>Manual Toothbrushes: Budget-Friendly</h3>
<ul>
    <li>💰 Costs as little as ₹30–₹300, making it affordable for everyone.</li>
    <li>💰 Needs to be replaced every 3–4 months but remains cost-effective.</li>
</ul>

<p><strong>🏆 Winner:</strong> Manual toothbrush – Much cheaper upfront, but electric may be a long-term investment in better oral health.</p>

<h2>Which One Should You Choose?</h2>
<table border="1">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Electric Toothbrush</th>
            <th>Manual Toothbrush</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Plaque Removal</td>
            <td>✅ More effective</td>
            <td>❌ Requires proper technique</td>
        </tr>
        <tr>
            <td>Gum Health</td>
            <td>✅ Reduces pressure on gums</td>
            <td>❌ Can cause gum damage if used too hard</td>
        </tr>
        <tr>
            <td>Ease of Use</td>
            <td>✅ Ideal for all ages, great for mobility issues</td>
            <td>❌ Requires effort & proper technique</td>
        </tr>
        <tr>
            <td>Cost</td>
            <td>❌ More expensive upfront</td>
            <td>✅ Very affordable</td>
        </tr>
        <tr>
            <td>Convenience</td>
            <td>❌ Requires charging</td>
            <td>✅ Always ready to use</td>
        </tr>
    </tbody>
</table>

<h2>Final Verdict: Which Is Better?</h2>
<p>✔ <strong>Best for plaque removal & gum health?</strong> → Electric toothbrush</p>
<p>✔ <strong>Best for affordability & convenience?</strong> → Manual toothbrush</p>
<p>Both electric and manual toothbrushes can maintain good oral hygiene—as long as you brush properly, floss daily, and visit your dentist regularly. If you can afford an electric toothbrush, it may be worth the investment, but a manual brush can still do the job with the right technique.</p>
<p><strong>So, which one do you prefer? Let us know in the comments!</strong></p>

    `
  },
  {
    title: "The Power of Saliva: Nature’s Defense Against Tooth Decay",
    excerpt: `When we think about oral health, we often focus on brushing, flossing, and visiting the dentist. But did you know that your body has a built-in defense system against tooth decay? That’s right—saliva plays a crucial role in keeping your mouth clean, protecting your enamel, and preventing cavities.
In this blog, we’ll explore why saliva is essential for oral health, how it helps fight tooth decay, and the best ways to boost saliva production for a healthier mouth.

`,
    image: assets.part51,
    date: "February 12, 2024",
    content: `
<h2>How Saliva Protects Your Teeth</h2>
<p>Saliva isn’t just water—it’s a complex fluid packed with enzymes, minerals, and antibacterial properties that keep your mouth healthy. Here’s how it works:</p>

<h3>1. Natural Plaque and Bacteria Control</h3>
<ul>
    <li>✅ Saliva washes away food particles and bacteria that cause plaque buildup.</li>
    <li>✅ It contains enzymes like lysozyme, which break down bacteria and prevent infections.</li>
</ul>

<h3>2. Neutralizing Acids</h3>
<ul>
    <li>✅ Every time you eat, bacteria in your mouth produce acids that weaken tooth enamel.</li>
    <li>✅ Saliva contains bicarbonate, which neutralizes these acids, preventing enamel erosion.</li>
</ul>

<h3>3. Strengthening Tooth Enamel</h3>
<ul>
    <li>✅ Saliva is rich in calcium, phosphate, and fluoride, which help remineralize enamel and repair minor damage before it turns into cavities.</li>
</ul>

<h3>4. Preventing Dry Mouth and Bad Breath</h3>
<ul>
    <li>✅ Saliva keeps your mouth moist and lubricated, preventing dry mouth (xerostomia), which can lead to bad breath and increased cavity risk.</li>
    <li>✅ A dry mouth allows bacteria to multiply, making saliva essential for fresh breath.</li>
</ul>

<h2>Signs of Low Saliva Production</h2>
<p>If your saliva levels are low, you may experience:</p>
<ul>
    <li>❌ Dry mouth or frequent thirst</li>
    <li>❌ Sticky feeling in your mouth</li>
    <li>❌ Bad breath</li>
    <li>❌ Increased cavities and plaque buildup</li>
    <li>❌ Difficulty chewing, swallowing, or speaking</li>
</ul>
<p>Low saliva production can be caused by dehydration, medications, stress, aging, or health conditions like diabetes and Sjögren’s syndrome.</p>

<h2>How to Stimulate Saliva Production Naturally</h2>
<p>If you struggle with dry mouth, here are some simple ways to boost saliva flow:</p>

<h3>1. Stay Hydrated 💧</h3>
<ul>
    <li>✅ Drink plenty of water throughout the day to keep saliva flowing.</li>
    <li>✅ Avoid excessive caffeine and alcohol, which dry out your mouth.</li>
</ul>

<h3>2. Chew Sugar-Free Gum 🍬</h3>
<ul>
    <li>✅ Chewing gum stimulates the salivary glands, increasing saliva flow.</li>
    <li>✅ Choose xylitol-based gum, which also helps prevent cavities.</li>
</ul>

<h3>3. Eat Saliva-Boosting Foods 🍎</h3>
<ul>
    <li>✅ Crunchy fruits and vegetables like apples, carrots, and celery stimulate saliva production.</li>
    <li>✅ Citrus fruits (in moderation), berries, and melons help keep your mouth hydrated.</li>
</ul>

<h3>4. Limit Sugary and Acidic Foods 🚫</h3>
<ul>
    <li>❌ Sugary snacks and acidic drinks lower saliva’s ability to neutralize acids, increasing your risk of cavities.</li>
    <li>✅ Instead, opt for cheese, nuts, and leafy greens, which promote saliva production and remineralize teeth.</li>
</ul>

<h3>5. Use a Humidifier at Night 🌬️</h3>
<ul>
    <li>✅ If you wake up with a dry mouth, sleeping with a humidifier can add moisture to the air and prevent dehydration.</li>
</ul>

<h3>6. Avoid Mouth Breathing 😮‍💨</h3>
<ul>
    <li>❌ Breathing through your mouth dries out saliva quickly.</li>
    <li>✅ Try breathing through your nose and using nasal strips if needed.</li>
</ul>

<h3>7. Try Saliva-Stimulating Rinses 🦷</h3>
<ul>
    <li>✅ Some alcohol-free mouthwashes contain ingredients that help moisten your mouth and boost saliva flow.</li>
    <li>✅ Look for rinses with xylitol or aloe vera.</li>
</ul>

<h2>Final Thoughts</h2>
<p>Saliva is one of nature’s most powerful tools for keeping your teeth and gums healthy. It helps wash away bacteria, neutralize acids, strengthen enamel, and prevent cavities. By staying hydrated, choosing saliva-friendly foods, and avoiding dry mouth triggers, you can enhance your body’s natural defense against tooth decay.</p>
<p><strong>Want more expert tips on oral health? Stay tuned for more dentist-approved advice!</strong></p>

`
  },
  {
    title: "DIY Dental Care: Safe Practices and Common Pitfalls",
    excerpt: `Are your at-home dental care routines helping or hurting your teeth?
Taking care of your teeth at home is essential for good oral hygiene, but not all DIY dental practices are safe. Some habits protect and strengthen your teeth, while others cause damage that may require professional treatment.
In this blog, we’ll cover safe DIY dental care practices and highlight common mistakes to avoid so you can maintain a healthy, bright smile without harming your teeth.

`,
    image: assets.part23,
    date: "February 12, 2024",
    content: `<h2>Safe DIY Dental Care Practices</h2>
<p>Here are some of the best at-home oral hygiene habits that support strong teeth and healthy gums.</p>

<h3>1. Brushing Properly Twice a Day 🪥</h3>
<ul>
    <li>✅ Use a soft-bristled toothbrush to avoid damaging your enamel.</li>
    <li>✅ Brush for at least two minutes, covering all surfaces of your teeth.</li>
    <li>✅ Use fluoride toothpaste to strengthen enamel and prevent cavities.</li>
    <li>🔹 <strong>Pro Tip:</strong> Hold your toothbrush at a 45-degree angle and use gentle, circular motions instead of scrubbing back and forth.</li>
</ul>

<h3>2. Flossing Daily to Remove Hidden Plaque 🦷</h3>
<ul>
    <li>✅ Floss once a day to clean areas your toothbrush can’t reach.</li>
    <li>✅ Use a gentle back-and-forth motion instead of snapping the floss into your gums.</li>
    <li>✅ Curve the floss into a C-shape around each tooth to clean effectively.</li>
    <li>🔹 <strong>Pro Tip:</strong> If you find flossing difficult, try floss picks or a water flosser.</li>
</ul>

<h3>3. Using Mouthwash for Extra Protection 🌀</h3>
<ul>
    <li>✅ Use an alcohol-free mouthwash to kill bacteria without drying out your mouth.</li>
    <li>✅ Look for fluoride-based mouthwashes to help prevent cavities.</li>
    <li>✅ Swish for 30 seconds after brushing and flossing.</li>
    <li>🔹 <strong>Pro Tip:</strong> Mouthwash should be used in addition to brushing and flossing—not as a replacement!</li>
</ul>

<h3>4. Drinking Water to Keep Your Mouth Clean 💧</h3>
<ul>
    <li>✅ Water washes away food particles and bacteria.</li>
    <li>✅ Helps maintain a healthy pH balance in your mouth.</li>
    <li>✅ Prevents dry mouth, which increases the risk of cavities.</li>
    <li>🔹 <strong>Pro Tip:</strong> Choose fluoridated water to help strengthen your teeth.</li>
</ul>

<h3>5. Eating a Tooth-Friendly Diet 🥦🥜</h3>
<ul>
    <li>✅ Calcium-rich foods (like dairy, nuts, and leafy greens) strengthen enamel.</li>
    <li>✅ Crunchy fruits and vegetables (like apples and carrots) help remove plaque.</li>
    <li>✅ Green tea contains natural compounds that fight bacteria.</li>
    <li>🔹 <strong>Pro Tip:</strong> Avoid excessive sugar and acidic foods, which can erode enamel.</li>
</ul>

<h2>Common DIY Dental Mistakes to Avoid</h2>
<p>Some at-home dental habits seem helpful but can actually harm your teeth over time. Avoid these common pitfalls!</p>

<h3>1. Brushing Too Hard or Using a Hard-Bristled Toothbrush 🚨</h3>
<ul>
    <li>❌ Aggressive brushing can wear down enamel and cause gum recession.</li>
    <li>❌ Hard-bristled brushes damage the protective layer of your teeth.</li>
    <li>🔹 <strong>Better Option:</strong> Use a soft-bristled toothbrush and brush gently.</li>
</ul>

<h3>2. Using DIY Teeth Whitening Hacks That Damage Enamel ⚠️</h3>
<ul>
    <li>❌ Lemon juice & baking soda are acidic and erode enamel.</li>
    <li>❌ Charcoal toothpaste is too abrasive and can weaken teeth over time.</li>
    <li>❌ Hydrogen peroxide rinses (when used too often) irritate gums and cause sensitivity.</li>
    <li>🔹 <strong>Better Option:</strong> Choose ADA-approved whitening toothpaste or strips instead of risky DIY methods.</li>
</ul>

<h3>3. Skipping Flossing Because of Bleeding Gums 🚫</h3>
<ul>
    <li>❌ If your gums bleed when flossing, it’s usually a sign of inflammation—not a reason to stop.</li>
    <li>❌ Avoiding flossing allows plaque buildup, making gum issues worse.</li>
    <li>🔹 <strong>Better Option:</strong> Floss daily, and your gums will become healthier over time.</li>
</ul>

<h3>4. Using Toothpicks Incorrectly 🏴</h3>
<ul>
    <li>❌ Sharp wooden toothpicks can injure gums and cause infections.</li>
    <li>❌ Toothpicks can’t remove plaque effectively like flossing does.</li>
    <li>🔹 <strong>Better Option:</strong> Use floss or interdental brushes instead of toothpicks.</li>
</ul>

<h3>5. Replacing Dental Visits with DIY Treatments 🏥</h3>
<ul>
    <li>❌ At-home care is essential, but it does not replace professional check-ups.</li>
    <li>❌ Cavities, gum disease, and tartar buildup require a dentist’s intervention.</li>
    <li>🔹 <strong>Better Option:</strong> Visit your dentist every 6–12 months for check-ups and professional cleanings.</li>
</ul>

<h2>Final Thoughts: Balance DIY Care with Professional Help</h2>
<p>Practicing good dental hygiene at home is crucial, but knowing what to avoid is just as important.</p>
<ul>
    <li>✔️ <strong>DO:</strong> Brush, floss, and rinse with mouthwash regularly.</li>
    <li>❌ <strong>DON’T:</strong> Overdo DIY treatments or rely on harmful internet hacks.</li>
</ul>
<p>While at-home care plays a huge role in maintaining oral health, regular dental check-ups remain essential to catch and prevent bigger issues.</p>
<p><strong>Want a healthier smile? Start practicing safe and effective dental care today!</strong></p>


    `
  },
  {
    title: "Diet and Dental Health: Foods That Strengthen and Harm Your Teeth",
    excerpt: `Which foods contribute to stronger teeth, and which ones should you avoid?
Your diet plays a major role in your oral health. While brushing and flossing are essential, what you eat can either strengthen your teeth or increase the risk of cavities, gum disease, and enamel erosion.
In this blog, we’ll explore the best foods for strong teeth, the worst offenders that contribute to tooth decay, and simple dietary tips for a healthier smile.
`,
    image: assets.part41,
    date: "February 12, 2024",
    content: `<h2>Best Foods for Stronger Teeth</h2>
<p>Eating the right foods can help remineralize your teeth, protect your enamel, and support gum health. Here are some of the top tooth-friendly foods:</p>

<h3>1. Dairy Products (Milk, Cheese, Yogurt) 🧀🥛</h3>
<ul>
    <li>✅ Rich in calcium and phosphorus, which strengthen tooth enamel.</li>
    <li>✅ Helps neutralize acids that weaken enamel.</li>
    <li>✅ Cheese stimulates saliva production, which washes away harmful bacteria.</li>
</ul>

<h3>2. Leafy Greens (Spinach, Kale, Broccoli) 🥬</h3>
<ul>
    <li>✅ High in calcium, which helps build strong teeth.</li>
    <li>✅ Contain folic acid, which promotes gum health and prevents gum disease.</li>
    <li>✅ Low in sugar and rich in fiber, making them a dentist-approved snack.</li>
</ul>

<h3>3. Crunchy Fruits and Vegetables (Apples, Carrots, Celery) 🍏🥕</h3>
<ul>
    <li>✅ Their natural crunchiness helps scrub away plaque and bacteria.</li>
    <li>✅ High in water and fiber, which promotes saliva production and cleans your mouth naturally.</li>
    <li>✅ Apples are often called "nature’s toothbrush" because they help clean teeth!</li>
</ul>

<h3>4. Nuts and Seeds (Almonds, Walnuts, Sesame Seeds) 🥜</h3>
<ul>
    <li>✅ High in calcium and phosphorus, which rebuild enamel.</li>
    <li>✅ Provides essential minerals for tooth strength and repair.</li>
    <li>✅ Crunchy texture stimulates saliva production, reducing bacteria growth.</li>
</ul>

<h3>5. Fatty Fish (Salmon, Tuna, Mackerel) 🐟</h3>
<ul>
    <li>✅ Rich in omega-3 fatty acids, which help reduce gum inflammation.</li>
    <li>✅ High in vitamin D, which improves calcium absorption for strong teeth and bones.</li>
</ul>

<h3>6. Green and Black Tea 🍵</h3>
<ul>
    <li>✅ Contain polyphenols, which reduce harmful bacteria and plaque formation.</li>
    <li>✅ Black tea may help strengthen enamel by reducing acid attacks.</li>
</ul>

<h3>7. Water 💧 (The Ultimate Tooth-Friendly Drink)</h3>
<ul>
    <li>✅ Washes away food particles and bacteria.</li>
    <li>✅ Helps maintain a healthy pH balance in your mouth.</li>
    <li>✅ Fluoridated water strengthens enamel and prevents cavities.</li>
</ul>

<h2>Worst Foods for Your Teeth</h2>
<p>Some foods accelerate tooth decay, weaken enamel, and promote bacterial growth. Limit or avoid these cavity-causing culprits:</p>

<h3>1. Sugary Snacks and Sweets (Candy, Cookies, Cake) 🍭🍪</h3>
<ul>
    <li>❌ Sugar feeds harmful bacteria, leading to cavities and plaque buildup.</li>
    <li>❌ Sticky candies like caramel and gummy bears cling to teeth, increasing decay risk.</li>
    <li>🔹 Better Option: Dark chocolate (less sugar and contains beneficial antioxidants).</li>
</ul>

<h3>2. Carbonated Soft Drinks (Soda, Energy Drinks) 🥤</h3>
<ul>
    <li>❌ Extremely acidic, causing enamel erosion.</li>
    <li>❌ Loaded with sugar, which fuels cavity-causing bacteria.</li>
    <li>🔹 Better Option: Sparkling water (without added sugar).</li>
</ul>

<h3>3. Acidic Fruits and Juices (Oranges, Lemons, Grapefruit) 🍊🍋</h3>
<ul>
    <li>❌ Their high acidity can erode enamel over time.</li>
    <li>❌ Citrus juices contain natural sugars, which feed bacteria.</li>
    <li>🔹 Better Option: Drink citrus juice with a straw and rinse your mouth with water afterward.</li>
</ul>

<h3>4. Starchy Foods (White Bread, Chips, Pasta) 🍞🥔</h3>
<ul>
    <li>❌ Starches break down into sugars, feeding bacteria.</li>
    <li>❌ Soft bread and chips tend to stick to teeth, increasing plaque buildup.</li>
    <li>🔹 Better Option: Whole-grain options that break down more slowly.</li>
</ul>

<h3>5. Dried Fruits (Raisins, Dried Apricots) 🍇</h3>
<ul>
    <li>❌ Sticky and high in natural sugars, making them just as bad as candy.</li>
    <li>❌ Can get trapped in teeth, fueling bacteria growth.</li>
    <li>🔹 Better Option: Fresh fruits instead of dried ones.</li>
</ul>

<h3>6. Alcoholic Beverages (Wine, Beer, Liquor) 🍷🍻</h3>
<ul>
    <li>❌ Dehydrates the mouth, reducing saliva and increasing cavity risk.</li>
    <li>❌ Red wine can stain teeth over time.</li>
    <li>🔹 Better Option: Drink water alongside alcohol to stay hydrated.</li>
</ul>

<h2>Dietary Tips for a Healthier Smile</h2>
<ul>
    <li>✅ <strong>Eat Calcium-Rich Foods:</strong> Include dairy, leafy greens, and almonds to keep enamel strong.</li>
    <li>✅ <strong>Drink More Water:</strong> Water is the best drink for oral health—it washes away bacteria and food particles.</li>
    <li>✅ <strong>Snack Smart:</strong> Choose nuts, cheese, or crunchy vegetables over chips and candy.</li>
    <li>✅ <strong>Limit Acidic and Sugary Foods:</strong> If you consume acidic or sugary foods, rinse with water afterward to protect your enamel.</li>
    <li>✅ <strong>Chew Sugar-Free Gum:</strong> Gum with xylitol can help stimulate saliva production and reduce bacteria growth.</li>
</ul>

<h2>Final Thoughts</h2>
<p>Your diet has a direct impact on your dental health. By eating tooth-friendly foods and avoiding harmful ones, you can strengthen your teeth, prevent decay, and maintain a brighter smile.</p>
<p><strong>Want to keep your teeth strong and healthy for life? Start making smarter food choices today!</strong></p>


    `
  },
  {
    title: "The Truth About Dental Check-Ups: How Often Do You Really Need Them?",
    excerpt: `Are biannual dental visits necessary for everyone?
For years, the standard advice has been to visit the dentist every six months for a routine check-up and cleaning. But is this one-size-fits-all recommendation really necessary for everyone? New research suggests that the ideal frequency of dental visits depends on individual risk factors, not just a fixed timeline.
In this blog, we’ll explore the latest findings on dental check-up frequency, who truly needs biannual visits, and how you can determine the right schedule for your oral health.
`,
    image: assets.part37,
    date: "February 12, 2024",
    content: `
<h2>The Origins of the "Every Six Months" Rule</h2>
<p>The idea of visiting the dentist every six months dates back to the early 20th century, when public health campaigns promoted routine check-ups to prevent tooth decay and gum disease. While this guideline is helpful for many, modern research suggests that some people may need more frequent visits, while others may do just fine with annual check-ups.</p>

<h2>How Often Should You Really See a Dentist?</h2>
<p>The right dental visit frequency depends on your oral health, lifestyle, and risk factors. Here’s a breakdown of different categories:</p>

<h3>1. Low-Risk Individuals: Once a Year May Be Enough</h3>
<ul>
    <li>✅ You brush and floss regularly and have no history of cavities or gum disease.</li>
    <li>✅ You eat a balanced diet with minimal sugary foods and drinks.</li>
    <li>✅ You don’t smoke or have any chronic health conditions affecting oral health.</li>
</ul>
<p><strong>🔹 Recommended Check-Up Frequency:</strong> Once a year for a professional cleaning and examination.</p>

<h3>2. Moderate-Risk Individuals: Stick to the Six-Month Rule</h3>
<ul>
    <li>✅ You have a history of minor cavities or early-stage gum issues.</li>
    <li>✅ You sometimes forget to floss or have plaque buildup despite brushing.</li>
    <li>✅ You consume sugary foods, acidic drinks, or coffee/tea frequently.</li>
</ul>
<p><strong>🔹 Recommended Check-Up Frequency:</strong> Every six months to prevent problems from worsening.</p>

<h3>3. High-Risk Individuals: More Frequent Visits Needed</h3>
<ul>
    <li>✅ You have gum disease (gingivitis or periodontitis).</li>
    <li>✅ You have a history of frequent cavities or tooth sensitivity.</li>
    <li>✅ You smoke, drink alcohol regularly, or have diabetes or other conditions affecting oral health.</li>
    <li>✅ You wear braces, dentures, or dental implants, requiring extra care.</li>
</ul>
<p><strong>🔹 Recommended Check-Up Frequency:</strong> Every three to four months, or as recommended by your dentist.</p>

<h2>Why Regular Dental Visits Matter</h2>
<p>Even if your teeth look and feel fine, skipping regular check-ups can lead to hidden problems that worsen over time. Here’s why dental visits are crucial:</p>
<h3>🦷 Early Detection of Problems</h3>
<ul>
    <li>Cavities, gum disease, and oral cancer can develop without noticeable symptoms.</li>
    <li>Dentists use X-rays and exams to catch issues before they require costly treatments.</li>
</ul>

<h3>🦷 Professional Cleaning for Better Oral Health</h3>
<ul>
    <li>Plaque and tartar can build up even with regular brushing and flossing.</li>
    <li>Professional cleanings remove hardened deposits that can’t be cleaned at home.</li>
</ul>

<h3>🦷 Prevention Saves Money and Pain</h3>
<ul>
    <li>Treating dental issues early is far cheaper than dealing with root canals, gum surgery, or tooth extractions later.</li>
    <li>Skipping visits can lead to painful emergencies that could have been prevented.</li>
</ul>

<h2>Can You Skip Dental Visits If You Have Good Oral Hygiene?</h2>
<p>While good oral hygiene is essential, it doesn’t replace professional cleanings and exams. Even those with perfect brushing and flossing habits can have:</p>
<ul>
    <li>✅ Tartar buildup in hard-to-reach areas.</li>
    <li>✅ Hidden cavities that only X-rays can detect.</li>
    <li>✅ Gum disease that progresses silently.</li>
</ul>
<p>Regular dental visits complement your daily oral care routine, ensuring long-term protection against serious dental problems.</p>

<h2>Final Verdict: How Often Should You Go?</h2>
<table border="1">
    <thead>
        <tr>
            <th>Risk Level</th>
            <th>Recommended Dental Visit Frequency</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Low Risk (Healthy gums, no cavities, good oral hygiene)</td>
            <td>Once a year</td>
        </tr>
        <tr>
            <td>Moderate Risk (Some history of cavities or plaque buildup)</td>
            <td>Every 6 months</td>
        </tr>
        <tr>
            <td>High Risk (Gum disease, frequent cavities, smoking, diabetes)</td>
            <td>Every 3–4 months</td>
        </tr>
    </tbody>
</table>

<p>If you’re unsure how often you should visit the dentist, talk to your dentist or hygienist, who can assess your specific needs and recommend the best schedule for you.</p>

<h2>Bottom Line?</h2>
<p>While biannual check-ups work for most people, some may need more frequent visits, while others can safely go once a year. The key is to personalize your dental care based on your unique risk factors.</p>
<p><strong>Have you scheduled your next dental check-up? Don’t wait until a problem arises—prevention is the best cure!</strong></p>

    `
  },
];

// import { useState } from 'react';
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

const BlogsPage = () => {
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="relative w-full h-[400px]"> 
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img 
              src={assets.img2} 
              alt="Mental Health Awareness" 
              className="w-full h-full object-contain object-center" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={assets.img4} 
              alt="Therapy Session" 
              className="w-full h-full object-contain object-center" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={assets.img17} 
              alt="Mindfulness" 
              className="w-full h-full object-contain object-center" 
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold"></h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedBlogIndex(index === selectedBlogIndex ? null : index)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer ${selectedBlogIndex === index ? 'col-span-2 md:col-span-3' : ''}`}
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className={`w-full transition-all ${selectedBlogIndex === index ? 'h-96 object-contain' : 'h-56 object-cover'}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{blog.title}</h3>
                {selectedBlogIndex === index ? (
                  <div>
                    <div className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    <button 
                      onClick={() => setSelectedBlogIndex(null)} 
                      className="px-4 py-2 mt-4 bg-yellow-50 text-black rounded-md hover:bg-[#f0d32e] transition"
                    >
                      Collapse
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                    <p className="text-sm text-gray-500 mt-4">{blog.date}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
