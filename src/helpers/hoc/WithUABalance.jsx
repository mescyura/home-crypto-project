export const WithUABalance = Component => {
	return props => {
		const { balance } = props;
		const uaBalance = balance * 42;
		return <Component {...props} uaBalance={uaBalance} />;
	};
};
