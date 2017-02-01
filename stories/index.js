import React from 'react';
import Spinner from '../.';
import { storiesOf, action } from '@kadira/storybook';

const Section = props =>
  <section
	  style={{
			fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
			paddingLeft: "1rem",
			paddingRight: "1rem",
		}}
	  {...props}
	/>

const CodeBlock = props =>
  <div
	  style={{
			border: "1px solid #ddd",
			padding: ".5rem 1rem",
			marginBottom: "1rem"
		}}
	  {...props}
	/>

const CodeExample = ({ children, ...props }) =>
  <pre>
		<code>{children}</code>
	</pre>

storiesOf('Spinner', module)
  .add('install', () => (
		<Section>
		  <h2>install</h2>
			<p>There is a `commonjs` bundle and a `umd` for convenience.</p>

		  <h3>install via npm</h3>
      <CodeBlock>
			  <CodeExample>{`npm i -S react-svg-spinner`}</CodeExample>
			  <CodeExample>{`# or use your NPM client of choice.`}</CodeExample>
      </CodeBlock>

      <CodeBlock>
			  <CodeExample>{`import Spinner from "react-svg-spinner";

// or

const Spinner = require("react-svg-spinner");
`}
        </CodeExample>
      </CodeBlock>

		  <h3>use in the browser</h3>
      <CodeBlock>
			  <CodeExample>{`<script src="https://unpkg.com/react-svg-spinner@0.1.0"></script>`}</CodeExample>
      </CodeBlock>
		</Section>
  ))
  .add('default', () => (
		<Section>
		  <h2>Defaults</h2>
			<p><code>react-svg-spinner</code> is a small, self-spinning SVG.</p>

      <CodeBlock>
			  <CodeExample>{`<Spinner />`}</CodeExample>
			  <Spinner />
      </CodeBlock>
		</Section>
  ))
  .add('prop: size', () => (
		<Section>
		  <h2><code>size</code></h2>
			<p><code>size</code> is a shorthand for setting <code>height</code> and <code>width</code> similtaniously.</p>

      <CodeBlock>
			  <CodeExample>{`<Spinner size="64px" />`}</CodeExample>
			  <Spinner size="64px" />
			</CodeBlock>

			<p><code>height</code> and <code>width</code> can be set independantly as well.</p>

			<CodeBlock>
			  <CodeExample>{`<Spinner height="64px" width="64px" />`}</CodeExample>
			  <Spinner height="64px" width="64px" />
			</CodeBlock>
		</Section>
  ))
  .add('prop: color', () => (
		<Section>
		  <h2><code>color</code></h2>
			<p><code>color</code> sets the color of the spinner. (big surprises, people.)</p>

			<CodeBlock>
			  <CodeExample>{`<Spinner color="fuchsia" />`}</CodeExample>
			  <Spinner color="fuchsia" />
			</CodeBlock>
		</Section>
  ))
  .add('prop: thickness', () => (
		<Section>
		  <h2><code>thickness</code></h2>
			<p><code>thickness</code> sets the thickness of your spinner.</p>
			<p>This <strong>does not</strong> map to any absolute value. It is relative to the SVG size</p>

		  <CodeBlock>
			  <CodeExample>{`<Spinner thickness={1} />`}</CodeExample>
			  <Spinner thickness={1} />
		  </CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={2} />`}</CodeExample>
			  <Spinner thickness={2} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={3} />`}</CodeExample>
			  <Spinner thickness={3} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={4} />`}</CodeExample>
			  <Spinner thickness={4} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={5} />`}</CodeExample>
			  <Spinner thickness={5} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={6} />`}</CodeExample>
			  <Spinner thickness={6} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={7} />`}</CodeExample>
			  <Spinner thickness={7} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner thickness={8} />`}</CodeExample>
			  <Spinner thickness={8} />
			</CodeBlock>
		</Section>
  ))
  .add('prop: gap', () => (
		<Section>
		  <h2><code>gap</code></h2>
			<p><code>gap</code> sets the space between the broken ends of the circle.</p>
			<p>This <strong>does not</strong> map to any absolute value. And varies wildly based on <code>thickness</code>.</p>

			<CodeBlock>
			  <CodeExample>{`<Spinner gap={1} />`}</CodeExample>
			  <Spinner gap={1} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner gap={2} />`}</CodeExample>
			  <Spinner gap={2} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner gap={3} />`}</CodeExample>
			  <Spinner gap={3} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner gap={4} />`}</CodeExample>
			  <Spinner gap={4} />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner gap={5} />`}</CodeExample>
			  <Spinner gap={5} />
			</CodeBlock>
		</Section>
  ))
  .add('prop: speed', () => (
		<Section>
		  <h2><code>speed</code></h2>
			<p><code>speed</code> sets the animation speed.</p>
			<p>There are three speeds <code>fast</code>, <code>slow</code>, and the default.</p>

			<CodeBlock>
			  <CodeExample>{`<Spinner speed="fast" />`}</CodeExample>
			  <Spinner speed="fast" />
			</CodeBlock>

			<CodeBlock>
			  <CodeExample>{`<Spinner speed="slow" />`}</CodeExample>
			  <Spinner speed="slow" />
			</CodeBlock>
		</Section>
  ))
