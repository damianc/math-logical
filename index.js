(function () {
	function bool(pq) {
		return pq.map(Boolean);
	}
	
	const ops = {
		and(p,q) {
			[p,q] = bool([p,q]);
			return p && q;
		},
		or(p,q) {
			[p,q] = bool([p,q]);
			return p || q;
		},
		xor(p,q) {
			[p,q] = bool([p,q]);
			return (p || q) && !(p && q);
		},
		nand(p,q) {
			[p,q] = bool([p,q]);
			return !(p && q);
		},
		nor(p,q) {
			[p,q] = bool([p,q]);
			return !(p || q);
		},
		xnor(p,q) {
			[p,q] = bool([p,q]);
			return (p && q) || !(p || q);
		},
		not(p) {
			return !p;
		},
		implies(p,q) {
			[p,q] = bool([p,q]);
			return !p || q;
		},
		equals(p,q) {
			return ops.xnor(p,q);
		}
	};
	
	Math.logical = ops;
})()
