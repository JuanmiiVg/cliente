const followers = new Set();

followers.add("Juan");
followers.add("Pedro");
followers.add("María");
followers.add("Ana");
followers.add("Luis");

followers.delete("Pedro");
followers.delete("María");

followers.add("Sofía");
followers.add("Carlos");
followers.add("Lucas");
followers.add("Santiago");
followers.add("Gabriel");
followers.add("Mateo");
followers.add("Laura");

console.log(`La cuenta tiene ${followers.size} seguidores:`);
for (const follower of followers) {
    console.log(follower);
}