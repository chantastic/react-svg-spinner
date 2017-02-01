import React from 'react';
import Spinner from '../.';
import { storiesOf, action } from '@kadira/storybook';

const CodeExample = ({ children, ...props }) =>
  <pre>
		<code>{children}</code>
	</pre>

storiesOf('Spinner', module)
  .add('default', () => (
		<section>
		  <h2>Defaults</h2>
			<p><code>react-svg-spinner</code> is a small, self-spinning SVG.</p>

		  <CodeExample>{`
<Spinner />
			`}</CodeExample>

		  <Spinner />
		</section>
  ))
  .add('prop: size', () => (
		<section>
		  <h2><code>size</code></h2>
			<p><code>size</code> is a shorthand for setting <code>height</code> and <code>width</code> similtaniously.</p>

		  <CodeExample>{`
<Spinner size="64px" />
			`}</CodeExample>

		  <Spinner size="64px" />

			<p><code>height</code> and <code>width</code> can be set independantly as well.</p>

		  <CodeExample>{`
<Spinner height="64px" width="64px" />
			`}</CodeExample>

		  <Spinner height="64px" width="64px" />
		</section>
  ))
  .add('prop: color', () => (
		<section>
		  <h2><code>color</code></h2>
			<p><code>color</code> sets the color of the spinner. (big surprises, people.)</p>

		  <CodeExample>{`
<Spinner color="fuchsia" />
			`}</CodeExample>

		  <Spinner color="fuchsia" />
		</section>
  ))
  .add('prop: thickness', () => (
		<section>
		  <h2><code>thickness</code></h2>
			<p><code>thickness</code> sets the thickness of your spinner.</p>
			<p>This <strong>does not</strong> map to any absolute value. It is relative to the SVG size</p>

		  <CodeExample>{`
<Spinner thickness={1} />
			`}</CodeExample>
		  <Spinner thickness={1} />

		  <CodeExample>{`
<Spinner thickness={2} />
			`}</CodeExample>
		  <Spinner thickness={2} />

		  <CodeExample>{`
<Spinner thickness={3} />
			`}</CodeExample>
		  <Spinner thickness={3} />

		  <CodeExample>{`
<Spinner thickness={4} />
			`}</CodeExample>
		  <Spinner thickness={4} />


		  <CodeExample>{`
<Spinner thickness={5} />
			`}</CodeExample>
		  <Spinner thickness={5} />

		  <CodeExample>{`
<Spinner thickness={6} />
			`}</CodeExample>
		  <Spinner thickness={6} />
		</section>
  ))
  .add('prop: gap', () => (
		<section>
		  <h2><code>gap</code></h2>
			<p><code>gap</code> sets the space between the broken ends of the circle.</p>
			<p>This <strong>does not</strong> map to any absolute value. And varies wildly based on <code>thickness</code>.</p>

		  <CodeExample>{`
<Spinner gap={1} />
			`}</CodeExample>
		  <Spinner gap={1} />

		  <CodeExample>{`
<Spinner gap={2} />
			`}</CodeExample>
		  <Spinner gap={2} />

		  <CodeExample>{`
<Spinner gap={3} />
			`}</CodeExample>
		  <Spinner gap={3} />

		  <CodeExample>{`
<Spinner gap={4} />
			`}</CodeExample>
		  <Spinner gap={4} />

		  <CodeExample>{`
<Spinner gap={5} />
			`}</CodeExample>
		  <Spinner gap={5} />
		</section>
  ))
  .add('prop: speed', () => (
		<section>
		  <h2><code>speed</code></h2>
			<p><code>speed</code> sets the animation speed.</p>
			<p>There are three speeds <code>fast</code>, <code>slow</code>, and the default.</p>

		  <CodeExample>{`
<Spinner speed="fast" />
			`}</CodeExample>

		  <Spinner speed="fast" />

		  <CodeExample>{`
<Spinner speed="slow" />
			`}</CodeExample>

		  <Spinner speed="slow" />
		</section>
  ))
