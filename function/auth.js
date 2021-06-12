module.exports = {
	admin(msg) {
		try {
			if (msg.member.roles.cache.has("850895272262369351")) {
				return true;
			}
			return false;
		}
		catch {
			return false;
		}
	}
}