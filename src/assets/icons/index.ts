const requireAll = (requireContext:any) => requireContext.keys().map(requireContext);

const req = require.context('./svg', true, /\.svg$/);

requireAll(req);
