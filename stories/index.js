import React from 'react';
import Spinner from '../.';
import { storiesOf, action } from '@kadira/storybook';

const CodeExample = ({ children, ...props }) =>
  <pre>
		<code>{children}</code>
	</pre>

storiesOf('Spinner', module)
  .add('no props', () => (
		<div>
		  <CodeExample>{`
<Spinner />
			`}</CodeExample>

		  <Spinner />
		</div>
  ))
  .add('height/width', () => (
		<div>
		  <CodeExample>{`
<Spinner
  height="64"
  width="64"
/>
			`}</CodeExample>

		  <Spinner
			  height="64"
			  width="64"
			/>
		</div>
  ))
  .add('height/width className', () => (
		<div>
		  <style>{`
				.s-8{height: 64px; width: 64px}
			`}</style>
		  <CodeExample>{`
<Spinner className="s-8" />
			`}</CodeExample>

		  <Spinner
			  height="64"
			  width="64"
			/>
		</div>
  ))
  .add('color', () => (
		<div>
		  <CodeExample>{`
<Spinner
  height="64"
  width="64"
  color="fuchsia"
/>
			`}</CodeExample>

		  <Spinner
			  height="64"
			  width="64"
				color="fuchsia"
			/>
		</div>
  ))
  .add('thickness', () => (
		<div>
		  <CodeExample>{`
<Spinner height="64" width="64" thickness={1} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={1} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={2} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={2} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={3} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={3} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={4} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={4} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={5} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={5} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={6} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={6} />

		  <CodeExample>{`
<Spinner height="64" width="64" thickness={7} />
			`}</CodeExample>
		  <Spinner height="64" width="64" thickness={7} />
		</div>
  ))
  .add('gap', () => (
		<div>
		  <CodeExample>{`
<Spinner height="64" width="64" gap={1} />
			`}</CodeExample>
		  <Spinner height="64" width="64" gap={1} />

		  <CodeExample>{`
<Spinner height="64" width="64" gap={2} />
			`}</CodeExample>
		  <Spinner height="64" width="64" gap={2} />

		  <CodeExample>{`
<Spinner height="64" width="64" gap={3} />
			`}</CodeExample>
		  <Spinner height="64" width="64" gap={3} />

		  <CodeExample>{`
<Spinner height="64" width="64" gap={4} />
			`}</CodeExample>
		  <Spinner height="64" width="64" gap={4} />

		  <CodeExample>{`
<Spinner height="64" width="64" gap={5} />
			`}</CodeExample>
		  <Spinner height="64" width="64" gap={5} />
		</div>
  ))
  .add('set animation speed', () => (
		<div>
		  <CodeExample>{`
<Spinner speed="fast" />
			`}</CodeExample>

		  <Spinner
			  height="64"
			  width="64"
				speed="fast"
			/>

		  <CodeExample>{`
<Spinner speed="slow" />
			`}</CodeExample>

		  <Spinner
			  height="64"
			  width="64"
				speed="slow"
			/>
		</div>
  ))
