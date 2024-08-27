export default function getDuration(begin, end){ // begin and end in millisecond
    const durationMs = end - begin; 
    return Math.round(durationMs / 60_000); // duration in minutes
}