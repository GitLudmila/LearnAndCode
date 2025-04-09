<?php

function playPass( string $s, int $n ) : string {
    $s = strtoupper( $s );

    for ( $i=0; $i < strlen( $s ); $i++) {
        if ( ! preg_match( "/[A-Z]/i", $s[$i] ) and ! is_numeric( $s[$i] ) )
            continue;
        $s[$i] = is_numeric( $s[$i] ) ? abs( $s[$i] - 9 ) : chr( 65 + ( ( ord( $s[$i] ) - 65 + $n ) % 26 ) );
        if ( $i % 2 != 0 )
                $s[$i] = strtolower( $s[$i] );
    }
    return strrev( $s );
}